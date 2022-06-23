import { Router } from 'express';

import templateRouter from './template.router.js';
import siteRouter from './site.router.js';
import commonRouter from './common.router.js';

const baseRouter = Router();

baseRouter.use('/templates', templateRouter);
baseRouter.use('/commons', commonRouter);
baseRouter.use('/', siteRouter);

export default baseRouter;