import { Request, Response } from "express";
import prisma from "../db";

type AuthenticatedRequest = Request & {
  user?: { id: string; name: string; email: string };
};

export const getSubTask = async (
  req: AuthenticatedRequest,
  res: Response
): Promise<Response> => {
  try {
    const subtask = await prisma.subtask.findUnique({
      where: { id: req.params.id },
    });
    if (!subtask) {
      return res.status(404).json({ error: "Subtask not found" });
    }
    return res.status(200).json(subtask);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

export const createSubTask = async (
  req: AuthenticatedRequest,
  res: Response
): Promise<Response> => {
  try {
    const newSubtask = await prisma.subtask.create({
      data: req.body,
    });
    return res.status(201).json(newSubtask);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};
export const updateSubTask = async (
  req: AuthenticatedRequest,
  res: Response
): Promise<Response> => {
  try {
    const updatedSubtask = await prisma.subtask.update({
      where: { id: req.params.id },
      data: req.body,
    });
    return res.status(200).json(updatedSubtask);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

export const deleteSubtask = async (
  req: AuthenticatedRequest,
  res: Response
): Promise<Response> => {
  try {
    await prisma.subtask.delete({
      where: { id: req.params.id },
    });
    return res.status(204).end();
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};
