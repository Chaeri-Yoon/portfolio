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
export const getProject = async (req, res) => {
    const { params: { id } } = req;
    try {
        const project = await Project.findById(id).populate('skills');
        return res.json({ ok: true, project })
    }
    catch (error) {
        return res.status(500).json({ ok: false, error })
    }
}