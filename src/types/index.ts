import { z } from "zod";

export const UserSchema = z.object({
  id: z.string(),
  name: z.string(),
  email: z.string().email(),
  password: z.string(),
  refreshToken: z.string().nullable().optional(),
});

export const BoardSchema = z.object({
  id: z.string(),
  name: z.string(),
});

export const ColumnSchema = z.object({
  id: z.string(),
  name: z.string(),
  boardId: z.string().optional(),
});

export const TaskSchema = z.object({
  id: z.string(),
  title: z.string(),
  description: z.string(),
  status: z.string().default("Todo"),
  columnId: z.string(),
});

export const SubtaskSchema = z.object({
  id: z.string(),
  title: z.string(),
  isCompleted: z.boolean().default(false),
  taskId: z.string(),
});

export const CreateUserSchema = z.object({
  name: z.string().min(1, "Name is required"),
  email: z.string().email("Invalid email format"),
  password: z.string().min(4, "Password must be at least 4 characters"),
});

export const LoginSchema = z.object({
  email: z.string().email("Invalid email format"),
  password: z.string().min(1, "Password is required"),
});

export const CreateColumnSchema = z.object({
  name: z.string().min(1, "Column name is required"),
  boardId: z.string().min(1, "Board ID is required"),
  index: z.number(),
});

export const CreateTaskWithSubtasksSchema = z.object({
  title: z.string().min(1, "Task title is required"),
  description: z.string(),
  status: z.string().optional().default("Todo"),
  index: z.number(),
  subtasks: z
    .array(
      z.object({
        title: z.string().min(1, "Subtask title is required"),
        isCompleted: z.boolean().optional().default(false),
        index: z.number(),
      })
    )
    .optional(),
});

export const UpdateColumnBodySchema = z.object({
  name: z.string().min(1, "Column name is required").optional(),
});

export const CreateSubtaskSchema = z.object({
  title: z.string().min(1, "Subtask title is required"),
  isCompleted: z.boolean().optional().default(false),
  taskId: z.string().min(1, "Task ID is required"),
  index: z.number(),
});

export const UpdateSubtaskBodySchema = z.object({
  title: z.string().min(1, "Subtask title is required").optional(),
  isCompleted: z.boolean().optional(),
});

export const UpdateTaskWithSubtasksBodySchema = z.object({
  title: z.string().min(1, "Task title is required").optional(),
  description: z.string().optional(),
  status: z.string().optional(),
  columnId: z.string().optional(),
  subtasks: z
    .array(
      z.object({
        id: z.string(),
        title: z.string().min(1, "Subtask title is required"),
        isCompleted: z.boolean(),
      })
    )
    .optional(),
});

export const CreateBoardWithColumnsSchema = z.object({
  name: z.string().min(1, "Board name is required"),
  columns: z.array(z.string().min(1, "Column name is required")).optional(),
});

export const BoardWithColumnsSchema = BoardSchema.extend({
  columns: z
    .array(
      ColumnSchema.extend({
        id: z.string(),
        name: z.string(),
      })
    )
    .optional(),
});

export type User = z.infer<typeof UserSchema>;
export type Board = z.infer<typeof BoardSchema>;
export type Column = z.infer<typeof ColumnSchema>;
export type Task = z.infer<typeof TaskSchema>;
export type Subtask = z.infer<typeof SubtaskSchema>;
export type BoardWithColumns = z.infer<typeof BoardWithColumnsSchema>;
export type CreateBoardWithColumns = z.infer<
  typeof CreateBoardWithColumnsSchema
>;
export type CreateUser = z.infer<typeof CreateUserSchema>;
export type Login = z.infer<typeof LoginSchema>;
export type CreateColumn = z.infer<typeof CreateColumnSchema>;
export type CreateTaskWithSubtasks = z.infer<
  typeof CreateTaskWithSubtasksSchema
>;
export type UpdateColumnBody = z.infer<typeof UpdateColumnBodySchema>;
export type CreateSubtask = z.infer<typeof CreateSubtaskSchema>;
export type UpdateSubtaskBody = z.infer<typeof UpdateSubtaskBodySchema>;
export type UpdateTaskWithSubtasksBody = z.infer<
  typeof UpdateTaskWithSubtasksBodySchema
>;

export type HonoContext = {
  Bindings: {
    NODE_ENV: string;
    DATABASE_URL: string;
    DIRECT_URL: string;
    MY_KV: KVNamespace;
    DB: D1Database;
    PORT: string;
    JWT_SECRET: string;
    TRUST_ORIGIN: string;
    JWT_ACCESS_SECRET: string;
    JWT_REFRESH_SECRET: string;
    JWT_REFRESH_EXPIRES_IN: string;
    JWT_ACCESS_EXPIRES_IN: string;
    JWT_ISSUER: string;
    JWT_AUDIENCE: string;
  };
  Variables: {
    userId: string;
  };
};
