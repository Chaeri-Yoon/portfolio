import mongoose from "mongoose";

const schema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    category: {
        type: String,
        enum: ['XR', 'WEB'],
        default: 'XR',
        required: true
    },
    main_image: {
        type: String,
        required: true
    },
    page_introduction: {
        type: String,
        required: false
    },
    page_descriptions: {
        type: [String],
        required: true
    },
    page_visuals: {
        type: [String],
        required: true
    },
    skills: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Skill',
        required: true
    }],
    link: {
        type: String,
        required: false
    },
    video: {
        type: String,
        required: false
    }
});
const model = mongoose.model('Project', schema);
export default model;