import {Router} from 'express'
import { createColumns,updateColumn,deleteColumn,getColumn ,addTaskColumn} from './handlers/column.js'
import { updateTaskSubtask ,getTask,deleteTask,moveTaskToColumn} from './handlers/tasks.js'
import { getBoards,getOneBoard,createboard,updateboard,deleteboard } from './handlers/boards.js'
import { updateSubTask } from './handlers/subtask.js'


const router = Router()

// Boards
router.post('/boards', createboard);
router.put('/boards/:id', updateboard);
router.delete('/boards/:boardId', deleteboard);
router.get('/boards/:boardId', getOneBoard);
router.get('/boards', getBoards);

// Columns
router.post('/boards/:boardId/columns', createColumns);
router.get('/columns/:id', getColumn);
router.put('/columns/:id', updateColumn);
router.delete('/columns/:id', deleteColumn);
router.post('/columns/:id/tasks', addTaskColumn);


// Tasks
router.put('/tasks/:id', updateTaskSubtask);
router.delete('/tasks/:id', deleteTask);
router.get('/tasks/:id', getTask);
router.put('/tasks/:id/column/:columnId',moveTaskToColumn);

// Subtasks
router.put('/subtask/:id', updateSubTask);



export default router;