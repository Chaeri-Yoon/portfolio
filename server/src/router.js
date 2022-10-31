import express from 'express';
import { getSkills } from './controller/mainController';
import { getProjects, getProject } from './controller/projectController';
import routes from './routes';

const router = express.Router();
router.get(routes.skills, getSkills);
router.get(routes.projects, getProjects);
router.get(routes.project, getProject);
export default router;