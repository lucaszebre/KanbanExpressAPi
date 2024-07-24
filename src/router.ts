import {Router} from 'express'
import { body, oneOf, validationResult } from "express-validator"
import { createColumns,updateColumn,deleteColumn,getColumn ,addTaskColumn} from './handlers/column'
import { updateTaskSubtask ,getTask,deleteTask,moveTaskToColumn} from './handlers/tasks'
import { getBoards,getOneBoard,createboard,updateboard,deleteboard } from './handlers/boards'
import { updateSubTask } from './handlers/subtask'
import { handleInputErrors } from './modules/middleware'
import { createJWT, protect } from './modules/auth'
import jwt from 'jsonwebtoken'


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


router.put('/verify', (req, res) => {
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1];
  
    if (token == null) return res.sendStatus(401);
  
    jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
      if (err) return res.sendStatus(403);
      return res.status(200).json({ valid: true, user });
    });
  });
export default router;