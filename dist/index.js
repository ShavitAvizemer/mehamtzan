"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const server_1 = require("./server");
const config_1 = require("./config");
const url = config_1.config.connectionDB;
const options = config_1.config.options;
mongoose_1.default.connect(url, options, (err) => {
    if (err)
        throw err;
    console.log('Connected to data base');
    server_1.connectToServer();
});
//# sourceMappingURL=index.js.map