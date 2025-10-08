import { Hono } from "hono";
import {
  createBoard,
  deleteBoard,
  getBoards,
  getOneBoard,
  updateBoard,
} from "./handlers/board.js";
import {
  addTaskColumn,
  createColumns,
  deleteColumn,
  getColumn,
  updateColumn,
} from "./handlers/column.js";
import {
  createSubTask,
  deleteSubtask,
  getSubTask,
  updateSubTask,
} from "./handlers/subtask.js";
import {
  deleteTask,
  getTask,
  moveTaskToColumn,
  updateTask,
} from "./handlers/task.js";
import { getCurrentUser, logout, refreshToken } from "./handlers/user.js";
import { HonoContext } from "./types/index.js";

const router = new Hono<HonoContext>();

router.post("/logout", logout);
router.patch("/refresh-token", refreshToken);
router.get("/me", getCurrentUser);

router.post("/boards", createBoard);
router.get("/boards", getBoards);
router.get("/boards/:boardId", getOneBoard);
router.patch("/boards/:id", updateBoard);
router.delete("/boards/:boardId", deleteBoard);

router.post("/boards/:boardId/columns", createColumns);
router.get("/columns/:id", getColumn);
router.patch("/columns/:id", updateColumn);
router.delete("/columns/:id", deleteColumn);
router.post("/columns/:id/tasks", addTaskColumn);

router.get("/tasks/:id", getTask);
router.patch("/tasks/:id", updateTask);
router.delete("/tasks/:id", deleteTask);
router.patch("/tasks/:id/column/:columnId", moveTaskToColumn);

router.get("/subtasks/:id", getSubTask);
router.post("/subtasks", createSubTask);
router.patch("/subtasks/:id", updateSubTask);
router.delete("/subtasks/:id", deleteSubtask);

export default router;
