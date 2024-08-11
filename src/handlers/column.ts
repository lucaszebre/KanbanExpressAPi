import prisma from "../db.js";
import {  Request, Response } from "express"

interface CreateColumnRequest extends Request {
  body: { name: string };
  params: { boardId: string };
}

interface GetColumnRequest extends Request {
  params: { id: string };
}

interface UpdateColumnRequest extends Request {
  params: { id: string };
}

export const createColumns = async (req:CreateColumnRequest, res:Response) => {
  try {
    // Validate that necessary data is provided
    const { name } = req.body;
    if (!name || !req.params.boardId) {
      return res.status(400).json({ error: 'Name and boardId are required' });
    }

    // Create new column
    const newColumn = await prisma.column.create({
      data: {
        name,
        boardId:req.params.boardId,
      },
    });

    // Respond with the created column
    res.status(201).json(newColumn);
  } catch (error:any) {
    // Handle error
    console.error('Error creating column: ', error);
    res.status(500).send(error.message);
  }
};


export const addTaskColumn = async (req:Request, res:Response) => {
  const { id } = req.params;
  const { subtasks, ...newTask } = req.body;

  try {
    // Check if column exists
    const column = await prisma.column.findUnique({ where: { id }});
    if (!column) {
      return res.status(404).send('Column not found');
    }

    // If column exists, create task along with subtasks
    const createdTask = await prisma.task.create({
      data: {
        ...newTask,
        column: {
          connect: { id },
        },
        subtasks: {
          create: subtasks.map((title: string) => ({ title })),
        },
      },
    });
    res.status(201).json(createdTask);
  } catch (error:any) {
    console.error(error); // Log the error for debugging
    res.status(500).send(error.message);
  }
};







  export const getColumn = async (req:GetColumnRequest, res:Response) => {
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
      if(!column){
          return  res.status(401).send('Column not found')
      }
      res.json(column);
    } catch (error:any) {
      res.status(500).send(error.message);
    }
  };
  
  export const updateColumn = async (req:Request, res:Response) => {
    const { id } = req.params;
    try {
      const updatedColumn = await prisma.column.update({
        where: { id },
        data: req.body,
      });
      res.json(updatedColumn);
    } catch (error:any) {
      res.status(500).send(error.message);
    }
  };
  
  export const deleteColumn = async (req:UpdateColumnRequest, res:Response) => {
    const { id } = req.params;
    try {
      const deletedColumn = await prisma.column.delete({
        where: { id },
      });
      res.json(deletedColumn);
    } catch (error:any) {
      res.status(500).send(error.message);
    }
  };
  