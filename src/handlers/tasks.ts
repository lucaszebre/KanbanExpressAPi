import { Request, Response } from "express";
import prisma from "../db";

type AuthenticatedRequest = Request & {
  user?: { id: string; name: string; email: string };
};

export const updateTaskSubtask = async (
  req: AuthenticatedRequest,
  res: Response
): Promise<Response> => {
  const { id } = req.params;
  const { updatedTask, subtasksAdd, subtasksChangeName, subtasksToDelete } =
    req.body;

  try {
    const task = await prisma.task.findUnique({
      where: { id },
      include: { subtasks: true },
    });

    if (!task) {
      return res.status(404).json({ error: "Task not found" });
    }

    if (subtasksToDelete && subtasksToDelete.length > 0) {
      await prisma.subtask.deleteMany({
        where: {
          id: { in: subtasksToDelete },
        },
      });
    }

    if (subtasksChangeName && subtasksChangeName.length > 0) {
      const updateSubtasksPromises = subtasksChangeName.map((subtask) =>
        prisma.subtask.update({
          where: { id: subtask.id },
          data: { title: subtask.title },
        })
      );
      await Promise.all(updateSubtasksPromises);
    }

    if (subtasksAdd && subtasksAdd.length > 0) {
      const addSubtasksPromises = subtasksAdd.map((title) =>
        prisma.subtask.create({
          data: {
            title,
            task: { connect: { id } },
          },
        })
      );
      await Promise.all(addSubtasksPromises);
    }

    const updatedTaskResult = await prisma.task.update({
      where: { id },
      data: updatedTask,
    });

    return res.json(updatedTaskResult);
  } catch (error) {
    return res.status(500).json({ error: "Server error" });
  }
};

export const deleteTask = async (
  req: AuthenticatedRequest,
  res: Response
): Promise<Response> => {
  const { id } = req.params;

  try {
    const deletedTask = await prisma.task.delete({
      where: { id },
      include: { subtasks: true },
    });

    return res.json(deletedTask);
  } catch (error) {
    return res.status(500).json({ error: "Server error" });
  }
};
export const getTask = async (
  req: AuthenticatedRequest,
  res: Response
): Promise<Response> => {
  const { id } = req.params;

  try {
    const task = await prisma.task.findUnique({
      where: { id },
      include: { subtasks: true },
    });

    return res.json(task);
  } catch (error) {
    return res.status(500).json({ error: "Server error" });
  }
};

export const moveTaskToColumn = async (
  req: AuthenticatedRequest,
  res: Response
): Promise<Response> => {
  const { id, columnId } = req.params;

  try {
    const [existingTask, newColumn] = await Promise.all([
      prisma.task.findUnique({ where: { id: id } }),
      prisma.column.findUnique({ where: { id: columnId } }),
    ]);

    if (!existingTask) {
      return res.status(404).json({ error: "Task not found" });
    }

    if (!newColumn) {
      return res.status(404).json({ error: "Column not found" });
    }

    const updatedTask = await prisma.task.update({
      where: { id: id },
      data: {
        column: {
          connect: { id: columnId },
        },
      },
      include: {
        subtasks: true,
      },
    });

    return res.status(200).json(updatedTask);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: error.message });
  }
};
