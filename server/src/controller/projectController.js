import Project from '../models/project';

export const getProjects = async (_, res) => {
    try {
        const projects = await Project.find({});
        return res.json({ ok: true, projects })
    }
    catch (error) {
        return res.status(500).json({ ok: false, error })
    }
}