"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const config_1 = require("../config");
const awxRouter = express_1.Router();
const awxURL = config_1.config.AWX_URL;
const path = config_1.config.PATH;
class awxController {
    static async runJob(req, res) {
        console.log('sdfsfsfsfsffffff');
        awxRouter.post('awx-avi.northeurope.cloudapp.azure.com/api/v2/');
        // res.json(await TeamsManager.createTeam(team));
    }
}
exports.default = awxController;
//# sourceMappingURL=awx.controller.js.map