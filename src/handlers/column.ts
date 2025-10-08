import { Context } from "hono";
import prismaClients from "../lib/prismaClient.js";
import {
  CreateColumnSchema,
  CreateTaskWithSubtasksSchema,
  HonoContext,
  UpdateColumnBodySchema,
} from "../types/index.js";

export const createColumns = async (c: Context<HonoContext>) => {
  try {
    const boardId = c.req.param("boardId");
    const body = await c.req.json();

    const validation = CreateColumnSchema.safeParse({
      ...body,
      boardId: boardId,
    });

    if (!validation.success) {
      return c.json({ error: validation.error.issues }, 400);
    }

    const { name, boardId: validatedBoardId } = validation.data;
    const prisma = await prismaClients.fetch(c.env.DB);

    const newColumn = await prisma.column.create({
      data: {
        name,
        boardId: validatedBoardId,
      },
    });

    return c.json(newColumn, 201);
  } catch (error) {
    console.error("Error creating column: ", error);
    return c.json({ error: "server error" }, 500);
  }
};

export const addTaskColumn = async (c: Context<HonoContext>) => {
  try {
    const columnId = c.req.param("id");
    const body = await c.req.json();

    const validation = CreateTaskWithSubtasksSchema.safeParse(body);

    if (!validation.success) {
      return c.json({ error: validation.error.issues }, 400);
    }

    const { subtasks, ...newTask } = validation.data;
    const prisma = await prismaClients.fetch(c.env.DB);

    const column = await prisma.column.findUnique({ where: { id: columnId } });
    if (!column) {
      return c.json({ error: "Column not found" }, 404);
    }

    const createdTask = await prisma.task.create({
      data: {
        ...newTask,
        column: {
          connect: { id: columnId },
        },
        subtasks: {
          create: subtasks,
        },
      },
    });

    return c.json(createdTask, 201);
  } catch (error) {
    console.error(error);
    return c.json({ error: "server error" }, 500);
  }
};

export const getColumn = async (c: Context<HonoContext>) => {
  try {
    const columnId = c.req.param("id");
    const prisma = await prismaClients.fetch(c.env.DB);

    const column = await prisma.column.findUnique({
      where: { id: columnId },
      include: {
        tasks: {
          include: {
            subtasks: true,
          },
        },
      },
    });

    if (!column) {
      return c.json({ error: "Column not found" }, 404);
    }

    return c.json(column);
  } catch (error) {
    console.error(error);
    return c.json({ error: "server error" }, 500);
  }
};

export const updateColumn = async (c: Context<HonoContext>) => {
  try {
    const columnId = c.req.param("id");
    const body = await c.req.json();

    const validation = UpdateColumnBodySchema.safeParse(body);

    if (!validation.success) {
      return c.json({ error: validation.error.issues }, 400);
    }

    const prisma = await prismaClients.fetch(c.env.DB);

    const updatedColumn = await prisma.column.update({
      where: { id: columnId },
      data: validation.data,
    });

    return c.json(updatedColumn, 201);
  } catch (error) {
    console.error(error);
    return c.json({ error: "server error" }, 500);
  }
};

export const deleteColumn = async (c: Context<HonoContext>) => {
  try {
    const columnId = c.req.param("id");
    const prisma = await prismaClients.fetch(c.env.DB);

    const deletedColumn = await prisma.column.delete({
      where: { id: columnId },
    });

    return c.json(deletedColumn);
  } catch (error) {
    console.error(error);
    return c.json({ error: "server error" }, 500);
  }
};
