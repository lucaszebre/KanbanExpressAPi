import prisma from "../db";

export const createColumns = async (req, res) => {
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
  } catch (error) {
    // Handle error
    console.error('Error creating column: ', error);
    res.status(500).send(error.message);
  }
};


export const addTaskColumn = async (req, res) => {
  const { id } = req.params;
  const newTask = req.body;
  try {
    const createdTask = await prisma.task.create({
      data: {
        ...newTask,
        column: {
          connect: { id },
        },
      },
    });
    res.status(201).json(createdTask);
    } catch (error) {
      res.status(500).send(error.message);
    }
  }



  export const getColumn = async (req, res) => {
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
    } catch (error) {
      res.status(500).send(error.message);
    }
  };
  
  export const updateColumn = async (req, res) => {
    const { id } = req.params;
    try {
      const updatedColumn = await prisma.column.update({
        where: { id },
        data: req.body,
      });
      res.json(updatedColumn);
    } catch (error) {
      res.status(500).send(error.message);
    }
  };
  
  export const deleteColumn = async (req, res) => {
    const { id } = req.params;
    try {
      const deletedColumn = await prisma.column.delete({
        where: { id },
      });
      res.json(deletedColumn);
    } catch (error) {
      res.status(500).send(error.message);
    }
  };
  