import { Router } from "express";
import { createboard, deleteboard, getBoards, getOneBoard, updateboard, } from "./handlers/boards.js";
import { addTaskColumn, createColumns, deleteColumn, getColumn, updateColumn, } from "./handlers/column.js";
import { updateSubTask } from "./handlers/subtask.js";
import { deleteTask, getTask, moveTaskToColumn, updateTask, } from "./handlers/tasks.js";
import { getCurrentUser, logout, refreshToken } from "./handlers/user.js";
const router = Router();
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
//# sourceMappingURL=router.js.map