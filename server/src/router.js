import express from 'express';
import { getSkills } from './controller/mainController';
import routes from './routes';

const router = express.Router();
router.get(routes.skills, getSkills)
export default router;