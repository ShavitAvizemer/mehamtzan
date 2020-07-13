import { Router } from 'express';
import awxController from './awx.controller';
import Wrapper from '../wrapper';

const appRouter : Router = Router();

appRouter.post('/launch-job', Wrapper.wrapAsync(awxController.runJob));

// appRouter.get('http://awx-avi.northeurope.cloudapp.azure.com/#/home', Wrapper.wrapAsync(awxController.runJob));

// appRouter.post('awx-avi.northeurope.cloudapp.azure.com/api/v2/');



export default appRouter;