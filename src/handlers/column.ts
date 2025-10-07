import { Request, Response } from "express";
import prisma from "../db";
import {
  CreateColumnSchema,
  CreateTaskWithSubtasksSchema,
  UpdateColumnBodySchema,
} from "../types";

type AuthenticatedRequest = Request & {
  user?: { id: string; name: string; email: string };
};

export const createColumns = async (
  req: AuthenticatedRequest,
  res: Response
): Promise<Response> => {
  try {
    const validation = CreateColumnSchema.safeParse({
      ...req.body,
      boardId: req.params.boardId,
    });
    if (!validation.success) {
      return res.status(400).json({ error: validation.error.issues });
    }

    const { name, boardId } = validation.data;

    const newColumn = await prisma.column.create({
      data: {
        name,
        boardId,
      },
    });

    return res.status(201).json(newColumn);
  } catch (error) {
    console.error("Error creating column: ", error);
    return res.status(500).send(error.message);
  }
};

export const addTaskColumn = async (
  req: AuthenticatedRequest,
  res: Response
): Promise<Response> => {
  const { id } = req.params;

  const validation = CreateTaskWithSubtasksSchema.safeParse(req.body);
  if (!validation.success) {
    return res.status(400).json({ error: validation.error.issues });
  }

  const { subtasks, ...newTask } = validation.data;

  try {
    const column = await prisma.column.findUnique({ where: { id } });
    if (!column) {
      return res.status(404).send("Column not found");
    }

    const createdTask = await prisma.task.create({
      data: {
        ...newTask,
        column: {
          connect: { id },
        },
        subtasks: {
          create: subtasks,
        },
      },
    });
    return res.status(201).json(createdTask);
  } catch (error) {
    console.error(error);
    return res.status(500).send(error.message);
  }
};

export const getColumn = async (
  req: AuthenticatedRequest,
  res: Response
): Promise<Response> => {
  const { id } = req.params;
  try {
    const column = await prisma.column.findUnique({
      where: { id },
      include: {
        tasks: {
          include: {
            subtasks: true,
          },
        },
      },
    });
    if (!column) {
      return res.status(404).json({ error: "Column not found" });
    }
    return res.status(200).json(column);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

export const updateColumn = async (
  req: AuthenticatedRequest,
  res: Response
): Promise<Response> => {
  const { id } = req.params;

  const validation = UpdateColumnBodySchema.safeParse(req.body);
  if (!validation.success) {
    return res.status(400).json({ error: validation.error.issues });
  }

  try {
    const updatedColumn = await prisma.column.update({
      where: { id },
      data: validation.data,
    });
    return res.status(201).json(updatedColumn);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

export const deleteColumn = async (
  req: AuthenticatedRequest,
  res: Response
): Promise<Response> => {
  const { id } = req.params;
  try {
    const deletedColumn = await prisma.column.delete({
      where: { id },
    });
    return res.status(200).json(deletedColumn);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};
