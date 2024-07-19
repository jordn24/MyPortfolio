import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const ProjectSchema = new Schema ({
    title: {type:String, required:true},
    category: {type: String, required: true},
    link: {type: String, required: true},
    date: {type: Date, default:Date.now},
    thumbnail: {type: String, required: true},
})

const Projects = mongoose.model('Project', ProjectSchema);

export default Projects;