"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const awx_controller_1 = __importDefault(require("./awx.controller"));
const wrapper_1 = __importDefault(require("../wrapper"));
const appRouter = express_1.Router();
appRouter.post('/launch-job', wrapper_1.default.wrapAsync(awx_controller_1.default.runJob));
// appRouter.get('http://awx-avi.northeurope.cloudapp.azure.com/#/home', Wrapper.wrapAsync(awxController.runJob));
appRouter.post('awx-avi.northeurope.cloudapp.azure.com/api/v2/');
exports.default = appRouter;
//# sourceMappingURL=awx.router.js.map