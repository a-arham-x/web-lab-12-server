const express = require("express");
const app = express();
const port = 5000;
const connectToMongo = require("./db.js");
const Projects = require("./models/Projects");
const ProjectImages = require("./models/ProjectImages");
const Education = require("./models/Education")
const Experience = require("./models/Experience");
const GalleryImages = require("./models/GalleryImages")
const Hobbies = require("./models/Hobbies");
const Skills = require("./models/Skills");
const cors = require("cors");

connectToMongo();

app.use(cors())

app.get("/", async (req, res)=>{
    
    const projects = await Projects.find();
    const projects_len = projects.length;
    const projectsToSend = [];
    for (let i=0; i<projects_len; i++){
        const projectImages = await ProjectImages.find({projectId: projects[i]._id});
        const images_len = projectImages.length;
        const projectToSend = {images: []}
        for (let j=0; j<images_len; j++){
            const base64Data = projectImages[j].image.toString('base64');
            const imageUri = `data:${projectImages[j].image.contentType};base64,${base64Data}`;
            projectToSend.images.push({imageUri})
        }
        projectToSend.name = projects[i].name;
        projectToSend.description = projects[i].description;
        projectToSend.url = projects[i].url;    
        projectToSend.githubUrl = projects[i].githubUrl;
        projectsToSend.push(projectToSend);
    }

    const education = await Education.find();
    const experiences = await Experience.find();

    const galleryImages = await GalleryImages.find();
    const galleryImagesToSend = [];
    const gal_len = galleryImages.length;
    for (let i=0; i<gal_len; i++){
        const base64Data = galleryImages[i].image.toString('base64');
        const imageUri = `data:${galleryImages[i].image.contentType};base64,${base64Data}`;
        galleryImagesToSend.push({imageUri})
    }

    const hobbies = await Hobbies.find();
    const hobbiesToSend = [];
    const len = hobbies.length;
    for (let i=0; i<len; i++){
        const base64Data = hobbies[i].image.toString('base64');
        const imageUri = `data:${hobbies[i].image.contentType};base64,${base64Data}`;
        hobbiesToSend.push({
            name: hobbies[i].name,
            description: hobbies[i].description,
            imageUri
        })
    }

    const skills = await Skills.find();
    const skillsToSend = [];
    const skills_len = skills.length;
    for (let i=0; i<skills_len; i++){
        const base64Data = skills[i].image.toString('base64');
        const imageUri = `data:${skills[i].image.contentType};base64,${base64Data}`;
        skillsToSend.push({
            name: skills[i].name,
            experienceLevel: skills[i].experienceLevel,
            imageUri
        })
    }

    return res.json({projects: projectsToSend, education, experiences, galleryImages: galleryImagesToSend, hobbies: hobbiesToSend, skills: skillsToSend});
})

app.listen(port, ()=>{
    console.log(`App is listening on http://localhost:${port}`);
})