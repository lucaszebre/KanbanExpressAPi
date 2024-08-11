import prisma  from "../db.js"
import  { NextFunction, Request, Response } from "express"

export const getSubTask= async (req:Request, res:Response) => {
  try {
    const subtask = await prisma.subtask.findUnique({
      where: { id: req.params.id }
    });
    if (!subtask) {
      return res.status(404).json({ error: 'Subtask not found' });
    }
    res.json(subtask);
  } catch (error:any) {
    res.status(500).json({ error: error.message });
  }
}

export const createSubTask = async (req:Request, res:Response) => {
  try {
    const newSubtask = await prisma.subtask.create({
      data: req.body
    });
    res.json(newSubtask);
  } catch (error:any) {
    res.status(500).json({ error: error.message });
  }
}
export const updateSubTask = async (req:Request, res:Response) => {
  
  try {
    const updatedSubtask = await prisma.subtask.update({
      where: { id: req.params.id },
      data: req.body
    });
    res.json(updatedSubtask);
  } catch (error:any) {
    res.status(500).json({ error: error.message });
  }
}

export const deleteSubtask = async (req:Request, res:Response) => {
  try {
    await prisma.subtask.delete({
      where: { id: req.params.id }
    });
    res.status(204).end();
  } catch (error:any) {
    res.status(500).json({ error: error.message });
  }
}

