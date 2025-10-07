import { z } from "zod";

// Base schemas for each model
export const UserSchema = z.object({
  id: z.uuid(),
  name: z.string(),
  email: z.string().email(),
  password: z.string(),
  refreshToken: z.string().nullable().optional(),
});

export const BoardSchema = z.object({
  id: z.uuid(),
  name: z.string(),
});

export const ColumnSchema = z.object({
  id: z.uuid(),
  name: z.string(),
  boardId: z.uuid().optional(),
});

export const TaskSchema = z.object({
  id: z.uuid(),
  title: z.string(),
  description: z.string(),
  status: z.string().default("Todo"),
  columnId: z.string(),
});

export const SubtaskSchema = z.object({
  id: z.uuid(),
  title: z.string(),
  isCompleted: z.boolean().default(false),
  taskId: z.uuid(),
});

// Input schemas for creating new records (excluding auto-generated fields)
export const CreateUserSchema = z.object({
  name: z.string().min(1, "Name is required"),
  email: z.string().email("Invalid email format"),
  password: z.string().min(4, "Password must be at least 6 characters"),
});

export const CreateBoardSchema = z.object({
  name: z.string().min(1, "Board name is required"),
  userId: z.string().uuid("Invalid user ID format"),
});

export const CreateColumnSchema = z.object({
  name: z.string().min(1, "Column name is required"),
  boardId: z.string().uuid("Invalid board ID format"),
});

export const CreateTaskSchema = z.object({
  title: z.string().min(1, "Task title is required"),
  description: z.string(),
  status: z.string().optional().default("Todo"),
  columnId: z.string().uuid("Invalid column ID format"),
});

export const CreateSubtaskSchema = z.object({
  title: z.string().min(1, "Subtask title is required"),
  isCompleted: z.boolean().optional().default(false),
  taskId: z.string().uuid("Invalid task ID format"),
});

export const CreateTaskWithSubtasksSchema = CreateTaskSchema.omit({
  columnId: true,
}).extend({
  subtasks: z.array(CreateSubtaskSchema.omit({ taskId: true })).optional(),
});

export const CreateBoardWithColumnsSchema = z.object({
  name: z.string().min(1, "Board name is required"),
  columns: z.array(z.string().min(1, "Column name is required")).optional(),
});

// Update schemas (all fields optional except id)
export const UpdateUserSchema = z.object({
  id: z.uuid(),
  name: z.string().min(1, "Name is required").optional(),
  email: z.string().email("Invalid email format").optional(),
  password: z
    .string()
    .min(6, "Password must be at least 6 characters")
    .optional(),
  refreshToken: z.string().nullable().optional(),
});

export const UpdateBoardSchema = z.object({
  id: z.uuid(),
  name: z.string().min(1, "Board name is required").optional(),
  userId: z.string().uuid("Invalid user ID format").optional(),
});

export const UpdateColumnSchema = z.object({
  id: z.uuid(),
  name: z.string().min(1, "Column name is required").optional(),
  boardId: z.string().uuid("Invalid board ID format").optional(),
});

export const UpdateColumnBodySchema = UpdateColumnSchema.omit({
  id: true,
  boardId: true,
});

export const UpdateSubtaskBodySchema = z.object({
  title: z.string().min(1, "Subtask title is required").optional(),
  isCompleted: z.boolean().optional(),
});

export const UpdateTaskBodySchema = z.object({
  title: z.string().min(1, "Task title is required").optional(),
  description: z.string().optional(),
  status: z.string().optional(),
  columnId: z.string().uuid("Invalid column ID format").optional(),
});

export const UpdateTaskWithSubtasksBodySchema = UpdateTaskBodySchema.extend({
  subtasks: z
    .array(
      z.object({
        id: z.string().uuid().optional(),
        title: z.string().min(1, "Subtask title is required"),
        isCompleted: z.boolean(),
      })
    )
    .optional(),
});

export const UpdateTaskSchema = z.object({
  id: z.uuid(),
  title: z.string().min(1, "Task title is required").optional(),
  description: z.string().optional(),
  status: z.string().optional(),
  columnId: z.string().uuid("Invalid column ID format").optional(),
});

export const UpdateSubtaskSchema = z.object({
  id: z.uuid(),
  title: z.string().min(1, "Subtask title is required").optional(),
  isCompleted: z.boolean().optional(),
  taskId: z.string().uuid("Invalid task ID format").optional(),
});

// Partial update schemas (id required, all other fields optional)
export const PartialUpdateUserSchema = UpdateUserSchema.partial().required({
  id: true,
});
export const PartialUpdateBoardSchema = UpdateBoardSchema.partial().required({
  id: true,
});
export const PartialUpdateColumnSchema = UpdateColumnSchema.partial().required({
  id: true,
});
export const PartialUpdateTaskSchema = UpdateTaskSchema.partial().required({
  id: true,
});
export const PartialUpdateSubtaskSchema =
  UpdateSubtaskSchema.partial().required({ id: true });

// Login schema
export const LoginSchema = z.object({
  email: z.string().email("Invalid email format"),
  password: z.string().min(1, "Password is required"),
});

// Common query parameter schemas
export const IdParamSchema = z.object({
  id: z.string().uuid("Invalid ID format"),
});

// Response schemas with relations
export const UserWithBoardsSchema = UserSchema.extend({
  boards: z.array(BoardSchema).optional(),
});

export const BoardWithColumnsSchema = BoardSchema.extend({
  columns: z.array(ColumnSchema).optional(),
});

export const ColumnWithTasksSchema = ColumnSchema.extend({
  tasks: z.array(TaskSchema).optional(),
  board: BoardSchema.optional(),
});

export const TaskWithSubtasksSchema = TaskSchema.extend({
  subtasks: z
    .array(SubtaskSchema.extend({ taskId: z.string().optional() }))
    .optional(),
});

export const SubtaskWithTaskSchema = SubtaskSchema.extend({
  task: TaskSchema.optional(),
});

// Type inference exports
export type User = z.infer<typeof UserSchema>;
export type Board = z.infer<typeof BoardSchema>;
export type Column = z.infer<typeof ColumnSchema>;
export type Task = z.infer<typeof TaskSchema>;
export type Subtask = z.infer<typeof SubtaskSchema>;

export type CreateUser = z.infer<typeof CreateUserSchema>;
export type CreateBoard = z.infer<typeof CreateBoardSchema>;
export type CreateColumn = z.infer<typeof CreateColumnSchema>;
export type CreateTask = z.infer<typeof CreateTaskSchema>;
export type CreateSubtask = z.infer<typeof CreateSubtaskSchema>;
export type CreateTaskWithSubtasks = z.infer<
  typeof CreateTaskWithSubtasksSchema
>;

export type UpdateUser = z.infer<typeof UpdateUserSchema>;
export type UpdateBoard = z.infer<typeof UpdateBoardSchema>;
export type UpdateColumn = z.infer<typeof UpdateColumnSchema>;
export type UpdateTask = z.infer<typeof UpdateTaskSchema>;
export type UpdateSubtask = z.infer<typeof UpdateSubtaskSchema>;

export type PartialUpdateUser = z.infer<typeof PartialUpdateUserSchema>;
export type PartialUpdateBoard = z.infer<typeof PartialUpdateBoardSchema>;
export type PartialUpdateColumn = z.infer<typeof PartialUpdateColumnSchema>;
export type PartialUpdateTask = z.infer<typeof PartialUpdateTaskSchema>;
export type PartialUpdateSubtask = z.infer<typeof PartialUpdateSubtaskSchema>;

export type Login = z.infer<typeof LoginSchema>;
export type IdParam = z.infer<typeof IdParamSchema>;

export type UserWithBoards = z.infer<typeof UserWithBoardsSchema>;
export type BoardWithColumns = z.infer<typeof BoardWithColumnsSchema>;
export type ColumnWithTasks = z.infer<typeof ColumnWithTasksSchema>;
export type TaskWithSubtasks = z.infer<typeof TaskWithSubtasksSchema>;
export type SubtaskWithTask = z.infer<typeof SubtaskWithTaskSchema>;
