"use strict";
exports.__esModule = true;
var client_1 = require("../prisma/client");
// const adapter = new PrismaBetterSQLite3({
//   url: "file:../prisma/kanban.db",
// });
var prisma = new client_1.PrismaClient();
exports["default"] = prisma;
//# sourceMappingURL=db.js.map