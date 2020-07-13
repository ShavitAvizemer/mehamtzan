import { Router } from 'express';
import appRouter from './awx/awx.router';

const mainRouter: Router = Router();

mainRouter.use('/awx', appRouter);

export default mainRouter;
