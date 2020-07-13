import { Request, Response, Router } from 'express';
import { config } from '../config';

const awxRouter: Router = Router();
const  awxURL= config.AWX_URL;
const path = config.PATH;

export default class awxController {
    static async runJob(req: Request, res: Response) {
        console.log('sdfsfsfsfsffffff')
        awxRouter.post('awx-avi.northeurope.cloudapp.azure.com/api/v2/');
        // res.json(await TeamsManager.createTeam(team));
    }
}
