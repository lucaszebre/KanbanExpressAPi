"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
exports.deleteColumn = exports.updateColumn = exports.getColumn = exports.addTaskColumn = exports.createColumns = void 0;
var db_1 = __importDefault(require("../db"));
var createColumns = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var name, newColumn, error_1;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                name = req.body.name;
                if (!name || !req.params.boardId) {
                    return [2 /*return*/, res.status(400).json({ error: 'Name and boardId are required' })];
                }
                return [4 /*yield*/, db_1["default"].column.create({
                        data: {
                            name: name,
                            boardId: req.params.boardId
                        }
                    })];
            case 1:
                newColumn = _a.sent();
                // Respond with the created column
                res.status(201).json(newColumn);
                return [3 /*break*/, 3];
            case 2:
                error_1 = _a.sent();
                // Handle error
                console.error('Error creating column: ', error_1);
                res.status(500).send(error_1.message);
                return [3 /*break*/, 3];
            case 3: return [2 /*return*/];
        }
    });
}); };
exports.createColumns = createColumns;
var addTaskColumn = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var id, _a, subtasks, newTask, column, createdTask, error_2;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                id = req.params.id;
                _a = req.body, subtasks = _a.subtasks, newTask = __rest(_a, ["subtasks"]);
                _b.label = 1;
            case 1:
                _b.trys.push([1, 4, , 5]);
                return [4 /*yield*/, db_1["default"].column.findUnique({ where: { id: id } })];
            case 2:
                column = _b.sent();
                if (!column) {
                    return [2 /*return*/, res.status(404).send('Column not found')];
                }
                return [4 /*yield*/, db_1["default"].task.create({
                        data: __assign(__assign({}, newTask), { column: {
                                connect: { id: id }
                            }, subtasks: {
                                create: subtasks.map(function (title) { return ({ title: title }); })
                            } })
                    })];
            case 3:
                createdTask = _b.sent();
                res.status(201).json(createdTask);
                return [3 /*break*/, 5];
            case 4:
                error_2 = _b.sent();
                console.error(error_2); // Log the error for debugging
                res.status(500).send(error_2.message);
                return [3 /*break*/, 5];
            case 5: return [2 /*return*/];
        }
    });
}); };
exports.addTaskColumn = addTaskColumn;
var getColumn = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var id, column, error_3;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                id = req.params.id;
                _a.label = 1;
            case 1:
                _a.trys.push([1, 3, , 4]);
                return [4 /*yield*/, db_1["default"].column.findUnique({
                        where: { id: id },
                        include: {
                            tasks: {
                                include: {
                                    subtasks: true
                                }
                            }
                        }
                    })];
            case 2:
                column = _a.sent();
                if (!column) {
                    return [2 /*return*/, res.status(401).send('Column not found')];
                }
                res.json(column);
                return [3 /*break*/, 4];
            case 3:
                error_3 = _a.sent();
                res.status(500).send(error_3.message);
                return [3 /*break*/, 4];
            case 4: return [2 /*return*/];
        }
    });
}); };
exports.getColumn = getColumn;
var updateColumn = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var id, updatedColumn, error_4;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                id = req.params.id;
                _a.label = 1;
            case 1:
                _a.trys.push([1, 3, , 4]);
                return [4 /*yield*/, db_1["default"].column.update({
                        where: { id: id },
                        data: req.body
                    })];
            case 2:
                updatedColumn = _a.sent();
                res.json(updatedColumn);
                return [3 /*break*/, 4];
            case 3:
                error_4 = _a.sent();
                res.status(500).send(error_4.message);
                return [3 /*break*/, 4];
            case 4: return [2 /*return*/];
        }
    });
}); };
exports.updateColumn = updateColumn;
var deleteColumn = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var id, deletedColumn, error_5;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                id = req.params.id;
                _a.label = 1;
            case 1:
                _a.trys.push([1, 3, , 4]);
                return [4 /*yield*/, db_1["default"].column["delete"]({
                        where: { id: id }
                    })];
            case 2:
                deletedColumn = _a.sent();
                res.json(deletedColumn);
                return [3 /*break*/, 4];
            case 3:
                error_5 = _a.sent();
                res.status(500).send(error_5.message);
                return [3 /*break*/, 4];
            case 4: return [2 /*return*/];
        }
    });
}); };
exports.deleteColumn = deleteColumn;
//# sourceMappingURL=column.js.map