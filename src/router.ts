import { Router } from "express";
import {
  createboard,
  deleteboard,
  getBoards,
  getOneBoard,
  updateboard,
} from "./handlers/boards";
import {
  addTaskColumn,
  createColumns,
  deleteColumn,
  getColumn,
  updateColumn,
} from "./handlers/column";
import { updateSubTask } from "./handlers/subtask";
import {
  deleteTask,
  getTask,
  moveTaskToColumn,
  updateTask,
} from "./handlers/tasks";
import { getCurrentUser, logout, refreshToken } from "./handlers/user";

const router: Router = Router();

// Boards
router.post("/boards", createboard);
router.patch("/boards/:id", updateboard);
router.delete("/boards/:boardId", deleteboard);
router.get("/boards/:boardId", getOneBoard);
router.get("/boards", getBoards);

// Columns
router.post("/boards/:boardId/columns", createColumns);
router.get("/columns/:id", getColumn);
router.patch("/columns/:id", updateColumn);
router.delete("/columns/:id", deleteColumn);
router.post("/columns/:id/tasks", addTaskColumn);

// Tasks
router.patch("/tasks/:id", updateTask);
router.delete("/tasks/:id", deleteTask);
router.get("/tasks/:id", getTask);
router.patch("/tasks/:id/column/:columnId", moveTaskToColumn);

// Subtasks
router.patch("/subtasks/:id", updateSubTask);

//user

router.patch("/refresh-token", refreshToken);
router.post("/logout", logout);
router.get("/me", getCurrentUser);

export default router;
