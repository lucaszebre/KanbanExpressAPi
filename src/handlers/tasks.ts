import { Request, Response } from "express";
import prisma from "../db";
import { TaskWithSubtasksSchema } from "../types";

type AuthenticatedRequest = Request & {
  user?: { id: string; name: string; email: string };
};

export const updateTask = async (
  req: AuthenticatedRequest,
  res: Response
): Promise<Response> => {
  const { id } = req.params;
  const data = req.body;

  try {
    const validateTask = TaskWithSubtasksSchema.parse(data);

    const task = await prisma.task.findUnique({
      where: { id },
      include: { subtasks: true },
    });

    if (!task) {
      return res.status(404).json({ error: "Task not found" });
    }

    const updatedTaskResult = await prisma.task.update({
      where: { id },
      include: {
        subtasks: true,
      },
      data: {
        title: validateTask.title,
        description: validateTask.description,
        status: validateTask.status,

        ...(validateTask.columnId && {
          column: {
            connect: { id: validateTask.columnId },
          },
        }),

        subtasks: {
          deleteMany: {
            id: {
              notIn: validateTask.subtasks.map((sub) => sub.id).filter(Boolean),
            },
          },
          upsert: validateTask.subtasks.map((subtask) => ({
            where: { id: subtask.id },
            update: {
              title: subtask.title,
              isCompleted: subtask.isCompleted,
            },
            create: {
              title: subtask.title,
              isCompleted: subtask.isCompleted,
            },
          })),
        },
      },
    });

    return res.json(updatedTaskResult);
  } catch (error) {
    console.error(error);
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
