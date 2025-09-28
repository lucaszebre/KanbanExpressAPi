import { PrismaClient } from "../prisma/client";

// const adapter = new PrismaBetterSQLite3({
//   url: "file:../prisma/kanban.db",
// });
const prisma = new PrismaClient();
export default prisma;
