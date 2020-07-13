import express from 'express';
import bodyParser from 'body-parser';
// import mainRouter from './router';
import { config } from './config';

const app = express();
const port = config.SERVER_PORT;
let server: any;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
// app.use(mainRouter);

function connectToServer(): void {
    server = app.listen(port, () => {
        console.log(`Server is listening on port ${port}`);
    });
}

export { connectToServer, app, server, port };


