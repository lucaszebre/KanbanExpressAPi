import prisma  from "../db"

export const updateTaskSubtask= async (req, res) => {
  const { id } = req.params;
  const { updatedTask, subtasksAdd, subtasksChangeName, subtasksToDelete } = req.body;

  try {
    // Find the task
    const task = await prisma.task.findUnique({
      where: { id },
      include: { subtasks: true },
    });

    if (!task) {
      return res.status(404).json({ error: 'Task not found' });
    }

    // Delete specified subtasks
    if (subtasksToDelete && subtasksToDelete.length > 0) {
      await prisma.subtask.deleteMany({
        where: {
          id: { in: subtasksToDelete },
        },
      });
    }

    // Update existing subtasks' name
    if (subtasksChangeName && subtasksChangeName.length > 0) {
      const updateSubtasksPromises = subtasksChangeName.map((subtask) =>
        prisma.subtask.update({
          where: { id: subtask.id },
          data: { title: subtask.title },
        })
      );
      await Promise.all(updateSubtasksPromises);
    }

    // Add new subtasks
    if (subtasksAdd && subtasksAdd.length > 0) {
      const addSubtasksPromises = subtasksAdd.map((title) =>
        prisma.subtask.create({
          data: {
            title,
            task: { connect: { id } },
          },
        })
      );
      await Promise.all(addSubtasksPromises);
    }

    // Update the task
    const updatedTaskResult = await prisma.task.update({
      where: { id },
      data: updatedTask,
    });

    res.json(updatedTaskResult);
  } catch (error) {
    res.status(500).json({ error: 'Server error' });
  }
 
}

