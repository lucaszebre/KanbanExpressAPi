import { Request, Response } from "express";
import prisma from "../db.js";
import {
  BoardWithColumnsSchema,
  CreateBoardWithColumnsSchema,
} from "../types/index.js";

type AuthenticatedRequest = Request & {
  user?: { id: string; name: string; email: string };
};

export const getOneBoard = async (
  req: AuthenticatedRequest,
  res: Response
): Promise<Response> => {
  try {
    if (req.params.boardId) {
      const board = await prisma.board.findUnique({
        where: { id: req.params.boardId },
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
        return res.status(404).json({ error: "Board not found" });
      } else {
        res.json({ data: board });
      }
    } else {
      return res.status(404).json({ error: "Need an id" });
    }
  } catch (error) {
    res.status(500).json({ error: "Server error" });
  }
};

export const getBoards = async (
  req: AuthenticatedRequest,
  res: Response
): Promise<Response> => {
  try {
    const boards = await prisma.user.findUnique({
      where: {
        id: req.user.id,
      },
      select: {
        // Include or exclude the fields you need
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

    return res.json(boards);
  } catch (error) {
    return res
      .status(500)
      .json({ error: "An error occurred while fetching the boards" });
  }
};

export const createboard = async (
  req: AuthenticatedRequest,
  res: Response
): Promise<void> => {
  try {
    const validation = CreateBoardWithColumnsSchema.safeParse(req.body);
    if (!validation.success) {
      res.status(400).json({ error: validation.error.issues });
      return;
    }
    const { name, columns } = validation.data;

    const newBoard = await prisma.board.create({
      data: {
        name: name,
        user: {
          connect: { id: req.user.id },
        },
        columns: columns
          ? {
              create: columns.map((column: string) => ({
                name: column,
              })),
            }
          : undefined,
      },
      include: {
        columns: true,
      },
    });

    res.status(201).json({ data: newBoard });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Failed to create board" });
  }
};

export const updateboard = async (
  req: AuthenticatedRequest,
  res: Response
): Promise<Response> => {
  try {
    const validatedBoard = BoardWithColumnsSchema.safeParse(req.body);

    if (!validatedBoard.success) {
      res.status(400).json({ error: validatedBoard.error.issues });
      return;
    }

    const { id } = req.params;
    if (id) {
      const board = await prisma.board.findUnique({
        where: {
          id,
        },
      });
      if (!board) {
        return res.status(404).json({ error: "Board not found" });
      }

      const data = validatedBoard.data;

      const updatedUpdate = await prisma.board.update({
        where: { id },
        data: {
          ...data,

          columns: data?.columns
            ? {
                deleteMany: {
                  id: {
                    notIn: data.columns.map((d) => d.id),
                  },
                },
                upsert: data.columns.map(({ id, name }) => ({
                  where: {
                    id,
                  },
                  update: {
                    name,
                  },
                  create: {
                    name,
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

      res.json({ data: updatedUpdate });
    } else {
      return res.status(404).json({ error: "Need an id" });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
};

export const deleteboard = async (
  req: AuthenticatedRequest,
  res: Response
): Promise<void> => {
  try {
    const deleted = await prisma.board.delete({
      where: {
        id: req.params.boardId,
      },
    });

    res.json({ data: deleted });
  } catch (error) {
    res.status(500).json({ error: "Failed to delete the board" });
  }
};
