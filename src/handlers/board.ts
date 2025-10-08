import { Context } from "hono";
import prismaClients from "../lib/prismaClient.js";
import {
  BoardWithColumnsSchema,
  CreateBoardWithColumnsSchema,
  HonoContext,
} from "../types/index.js";

export const getOneBoard = async (c: Context<HonoContext>) => {
  try {
    const boardId = c.req.param("boardId");

    if (!boardId) {
      return c.json({ error: "Need an id" }, 404);
    }

    const prisma = await prismaClients.fetch(c.env.DB);

    const board = await prisma.board.findUnique({
      where: { id: boardId },
      include: {
        columns: {
          include: {
            tasks: {
              include: {
                subtasks: true,
              },
            },
          },
        },
      },
    });

    if (!board) {
      return c.json({ error: "Board not found" }, 404);
    }

    return c.json({ data: board });
  } catch (error) {
    console.error(error);
    return c.json({ error: "Server error" }, 500);
  }
};

// Get all boards for the authenticated user
export const getBoards = async (c: Context<HonoContext>) => {
  try {
    const userId = c.get("userId");

    if (!userId) {
      return c.json({ error: "User not authenticated" }, 401);
    }

    const prisma = await prismaClients.fetch(c.env.DB);

    const boards = await prisma.user.findUnique({
      where: {
        id: userId,
      },
      select: {
        id: true,
        name: true,
        email: true,
        boards: {
          include: {
            columns: {
              include: {
                tasks: {
                  include: {
                    subtasks: true,
                  },
                },
              },
            },
          },
        },
      },
    });

    return c.json(boards);
  } catch (error) {
    console.error(error);
    return c.json(
      { error: "An error occurred while fetching the boards" },
      500
    );
  }
};

// Create a new board with optional columns
export const createBoard = async (c: Context<HonoContext>) => {
  try {
    const userId = c.get("userId");

    if (!userId) {
      return c.json({ error: "User not authenticated" }, 401);
    }

    const body = await c.req.json();
    const validation = CreateBoardWithColumnsSchema.safeParse(body);

    if (!validation.success) {
      return c.json({ error: validation.error.issues }, 400);
    }

    const { name, columns } = validation.data;
    const prisma = await prismaClients.fetch(c.env.DB);

    const newBoard = await prisma.board.create({
      data: {
        name: name,
        user: {
          connect: { id: userId },
        },
        columns: columns
          ? {
              create: columns.map((column: string, index) => ({
                name: column,
                index,
              })),
            }
          : undefined,
      },
      include: {
        columns: true,
      },
    });

    return c.json({ data: newBoard }, 201);
  } catch (error) {
    console.error(error);
    return c.json({ error: "Failed to create board" }, 500);
  }
};

// Update an existing board
export const updateBoard = async (c: Context<HonoContext>) => {
  try {
    const boardId = c.req.param("id");

    if (!boardId) {
      return c.json({ error: "Need an id" }, 404);
    }

    const body = await c.req.json();
    const validatedBoard = BoardWithColumnsSchema.safeParse(body);

    if (!validatedBoard.success) {
      return c.json({ error: validatedBoard.error.issues }, 400);
    }

    const prisma = await prismaClients.fetch(c.env.DB);

    const board = await prisma.board.findUnique({
      where: {
        id: boardId,
      },
    });

    if (!board) {
      return c.json({ error: "Board not found" }, 404);
    }

    const data = validatedBoard.data;

    const updatedBoard = await prisma.board.update({
      where: { id: boardId },
      data: {
        ...data,
        columns: data?.columns
          ? {
              deleteMany: {
                id: {
                  notIn: data.columns.map((d) => d.id),
                },
              },
              upsert: data.columns.map(({ id, name }, index) => ({
                where: {
                  id,
                },
                update: {
                  name,
                  index,
                },
                create: {
                  name,
                  index,
                },
              })),
            }
          : {},
      },
      include: {
        columns: {
          include: {
            tasks: {
              include: {
                subtasks: true,
              },
            },
          },
        },
      },
    });

    return c.json({ data: updatedBoard });
  } catch (error) {
    console.error(error);
    return c.json({ message: "Server error" }, 500);
  }
};

// Delete a board
export const deleteBoard = async (c: Context<HonoContext>) => {
  try {
    const boardId = c.req.param("boardId");

    if (!boardId) {
      return c.json({ error: "Need an id" }, 404);
    }

    const prisma = await prismaClients.fetch(c.env.DB);

    const deleted = await prisma.board.delete({
      where: {
        id: boardId,
      },
    });

    return c.json({ data: deleted });
  } catch (error) {
    console.error(error);
    return c.json({ error: "Failed to delete the board" }, 500);
  }
};
