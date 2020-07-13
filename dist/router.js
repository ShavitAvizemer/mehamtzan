"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const awx_router_1 = __importDefault(require("./awx/awx.router"));
const mainRouter = express_1.Router();
mainRouter.use('/awx', awx_router_1.default);
exports.default = mainRouter;
//# sourceMappingURL=router.js.map