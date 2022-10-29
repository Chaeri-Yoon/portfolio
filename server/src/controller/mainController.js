import Skill from '../models/skill';

export const getSkills = async (_, res) => {
    try {
        const skills = await Skill.find({});
        return res.json({ ok: true, skills })
    }
    catch (error) {
        return res.status(500).json({ ok: false, error })
    }
}