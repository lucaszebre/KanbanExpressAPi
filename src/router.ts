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
  updateTaskSubtask,
} from "./handlers/tasks";

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
router.patch("/tasks/:id", updateTaskSubtask);
router.delete("/tasks/:id", deleteTask);
router.get("/tasks/:id", getTask);
router.patch("/tasks/:id/column/:columnId", moveTaskToColumn);

// Subtasks
router.patch("/subtask/:id", updateSubTask);

// router.put("/verify", (req: Request, res: Response): void => {
//   const authHeader = req.headers["authorization"] as string | undefined;
//   const token = authHeader && authHeader.split(" ")[1];

//   if (token == null) return res.sendStatus(401);

//   jwt.verify(
//     token,
//     process.env.JWT_SECRET as string,
//     (err: jwt.VerifyErrors | null, user: string | JwtPayload | undefined) => {
//       if (err) return res.sendStatus(403);
//       return res.status(200).json({ valid: true, user });
//     }
//   );
// });
export default router;
