"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const body_parser_1 = __importDefault(require("body-parser"));
// import mainRouter from './router';
const config_1 = require("./config");
const app = express_1.default();
exports.app = app;
const port = config_1.config.SERVER_PORT;
exports.port = port;
let server;
exports.server = server;
app.use(body_parser_1.default.urlencoded({ extended: false }));
app.use(body_parser_1.default.json());
// app.use(mainRouter);
function connectToServer() {
    exports.server = server = app.listen(port, () => {
        console.log(`Server is listening on port ${port}`);
    });
}
exports.connectToServer = connectToServer;
//# sourceMappingURL=server.js.map