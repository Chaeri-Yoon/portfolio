import express from 'express';
import { getSkills } from './controller/mainController';
import { getProjects } from './controller/projectController';
import routes from './routes';

const router = express.Router();
router.get(routes.skills, getSkills);
router.get(routes.projects, getProjects);
export default router;