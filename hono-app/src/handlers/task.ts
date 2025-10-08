import { Context } from "hono";
import prismaClients from "../lib/prismaClient.js";
import {
  HonoContext,
  UpdateTaskWithSubtasksBodySchema,
} from "../types/index.js";

export const updateTask = async (c: Context<HonoContext>) => {
  try {
    const taskId = c.req.param("id");
    const body = await c.req.json();

    const validation = UpdateTaskWithSubtasksBodySchema.safeParse(body);

    if (!validation.success) {
      return c.json({ error: validation.error.issues }, 400);
    }

    const data = validation.data;
    const prisma = await prismaClients.fetch(c.env.DB);

    const task = await prisma.task.findUnique({
      where: { id: taskId },
      include: { subtasks: true },
    });

    if (!task) {
      return c.json({ error: "Task not found" }, 404);
    }

    const updatedTaskResult = await prisma.task.update({
      where: { id: taskId },
      include: {
        subtasks: true,
      },
      data: {
        title: data.title,
        description: data.description,
        status: data.status,

        ...(data.columnId && {
          column: {
            connect: { id: data.columnId },
          },
        }),

        subtasks: data.subtasks
          ? {
              deleteMany: {
                id: {
                  notIn: data.subtasks.map((sub) => sub.id).filter(Boolean),
                },
              },
              upsert: data.subtasks.map((subtask) => ({
                where: { id: subtask.id || "" },
                update: {
                  title: subtask.title,
                  isCompleted: subtask.isCompleted,
                },
                create: {
                  title: subtask.title,
                  isCompleted: subtask.isCompleted,
                },
              })),
            }
          : undefined,
      },
    });

    return c.json(updatedTaskResult);
  } catch (error) {
    console.error(error);
    return c.json({ error: "Server error" }, 500);
  }
};

export const deleteTask = async (c: Context<HonoContext>) => {
  try {
    const taskId = c.req.param("id");
    const prisma = await prismaClients.fetch(c.env.DB);

    const deletedTask = await prisma.task.delete({
      where: { id: taskId },
      include: { subtasks: true },
    });

    return c.json(deletedTask);
  } catch (error) {
    console.error(error);
    return c.json({ error: "Server error" }, 500);
  }
};

export const getTask = async (c: Context<HonoContext>) => {
  try {
    const taskId = c.req.param("id");
    const prisma = await prismaClients.fetch(c.env.DB);

    const task = await prisma.task.findUnique({
      where: { id: taskId },
      include: { subtasks: true },
    });

    if (!task) {
      return c.json({ error: "Task not found" }, 404);
    }

    return c.json(task);
  } catch (error) {
    console.error(error);
    return c.json({ error: "Server error" }, 500);
  }
};

export const moveTaskToColumn = async (c: Context<HonoContext>) => {
  try {
    const taskId = c.req.param("id");
    const columnId = c.req.param("columnId");
    const prisma = await prismaClients.fetch(c.env.DB);

    const [existingTask, newColumn] = await Promise.all([
      prisma.task.findUnique({ where: { id: taskId } }),
      prisma.column.findUnique({ where: { id: columnId } }),
    ]);

    if (!existingTask) {
      return c.json({ error: "Task not found" }, 404);
    }

    if (!newColumn) {
      return c.json({ error: "Column not found" }, 404);
    }

    const updatedTask = await prisma.task.update({
      where: { id: taskId },
      data: {
        column: {
          connect: { id: columnId },
        },
      },
      include: {
        subtasks: true,
      },
    });

    return c.json(updatedTask);
  } catch (error) {
    console.error(error);
    return c.json({ error: "server error" }, 500);
  }
};
