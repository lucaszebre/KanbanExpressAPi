import { Context } from "hono";
import prismaClients from "../lib/prismaClient.js";
import {
  CreateColumnSchema,
  CreateTaskWithSubtasksSchema,
  HonoContext,
  UpdateColumnBodySchema,
  UpdateColumnsBodySchema,
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
        index: validation.data.index,
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
        index: validation.data.index,
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

export const updateColumns = async (c: Context<HonoContext>) => {
  try {
    const boardId = c.req.param("boardId");
    const body = await c.req.json();

    const validation = UpdateColumnsBodySchema.safeParse(body);

    if (!validation.success) {
      return c.json({ error: validation.error.issues }, 400);
    }

    const prisma = await prismaClients.fetch(c.env.DB);

    // Verify board exists
    const board = await prisma.board.findUnique({ where: { id: boardId } });
    if (!board) {
      return c.json({ error: "Board not found" }, 404);
    }

    const { columns } = validation.data;

    // Update each column using the same logic as updateColumn
    const updatedColumns = await Promise.all(
      columns.map(async (columnData) => {
        const { id, ...updateData } = columnData;

        return await prisma.column.update({
          where: { id },
          data: {
            ...updateData,
            tasks: {
              deleteMany: {
                id: {
                  notIn: updateData.tasks?.map((t) => t.id),
                },
              },
              upsert: updateData.tasks?.map(
                ({ description, id, status, title, subtasks }, index) => ({
                  where: {
                    id,
                  },
                  update: {
                    description,
                    id,
                    status,
                    title,
                    index,
                  },
                  create: {
                    description,
                    title,
                    id,
                    status,
                    subtasks: {
                      createMany: {
                        data: subtasks
                          ? subtasks.map(
                              ({ id, title, isCompleted }, index) => ({
                                id,
                                title,
                                isCompleted,
                                index,
                              })
                            )
                          : [],
                      },
                    },
                    index,
                  },
                })
              ),
            },
          },
          include: {
            tasks: {
              include: {
                subtasks: true,
              },
            },
          },
        });
      })
    );

    return c.json(updatedColumns, 200);
  } catch (error) {
    console.error("Error updating columns: ", error);
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
      data: {
        ...validation.data,
        tasks: {
          deleteMany: {
            id: {
              notIn: validation.data.tasks?.map((t) => t.id),
            },
          },
          upsert: validation.data.tasks?.map(
            ({ description, id, status, title, subtasks }, index) => ({
              where: {
                id,
              },
              update: {
                description,
                id,
                status,

                title,
                index,
              },
              create: {
                description,
                title,
                id,
                status,
                subtasks: {
                  createMany: {
                    data: subtasks
                      ? subtasks.map(({ id, title, isCompleted }, index) => ({
                          id,
                          title,
                          isCompleted,
                          index,
                        }))
                      : [],
                  },
                },
                index,
              },
            })
          ),
        },
      },
      include: {
        tasks: {
          include: {
            subtasks: true,
          },
        },
      },
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
