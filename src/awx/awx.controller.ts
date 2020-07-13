import { Request, Response, Router } from 'express';
import { config } from '../config';

const awxRouter: Router = Router();
const  awxURL= config.AWX_URL;
const path = config.PATH;
const awx_auth_username = config.awx_auth_username;
const awx_auth_password = config.awx_auth_password;


export default class awxController {
    static async runJob(req: Request, res: Response) {
        console.log('sdfsfsfsfs');
        awxRouter.post(`${awxURL}${path}`);
        // res.json(await TeamsManager.createTeam(team));
    }
}
