-- AlterTable
ALTER TABLE "Subtask" ADD COLUMN     "index" SERIAL NOT NULL;

-- AlterTable
ALTER TABLE "Task" ADD COLUMN     "index" SERIAL NOT NULL;
