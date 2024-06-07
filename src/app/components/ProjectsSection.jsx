"use client"
import React, {useState} from "react";
import ProjectsCard from "./ProjectsCard";
import ProjectTag from "./ProjectTag";



const projectDatas = [
    {
        id: 1, 
        title: "React Prtijolio WebSite",
        description: "project 1 decription",
        image: "/images/about-image.jpeg",
        tag: ["All", "Web"],
        gitUrl: "/",
        prevewUrl: "/"
    },
    {
        id: 2, 
        title: "React Prtijolio WebSite",
        description: "project 2 decription",
        image: "/images/avatar.jpeg",
        tag: ["All", "Web"],
        gitUrl: "/",
        previewUrl: "/"
    },
    {
        id: 3, 
        title: "React Prtijolio WebSite",
        description: "project 3 decription",
        image: "/images/about-image.jpeg",
        tag: ["All", "Web"],
        gitUrl: "/",
        previewUrl: "/"
    },
    {
        id: 4, 
        title: "React Prtijolio WebSite",
        description: "project 4 decription",
        image: "/images/avatar.jpeg",
        tag: ["All", "Web"],
        gitUrl: "/",
        previewUrl: "/"
    },
    {
        id: 5, 
        title: "React Prtijolio WebSite",
        description: "project 5 decription",
        image: "/images/about-image.jpeg",
        tag: ["All", "Web"],
        gitUrl: "/",
        previewUrl: "/"
    },
    {
        id: 6, 
        title: "React Prtijolio WebSite",
        description: "project 6 decription",
        image: "/images/avatar.jpeg",
        tag: ["All", "Web"],
        gitUrl: "/",
        previewUrl: "/"
    },
]

const ProjectsSection = () => {
    const [tag, setTag] = useState("All");

    const handleTagChange = (newTag) => {
        setTag(newTag);
    }

    const filteredProjects = projectDatas.filter((project) =>{
        project.tag.includes(tag);
    });

    return (
        <>
            <h2 className="text-center text-4xl font-bold text-white mt-4">My Projects
            </h2>
            <div className="text-white flex flex-row justify-center itens-center gap-2 py-6">
               <ProjectTag
                onClick={handleTagChange}
                name="All"
                isSelected={tag === "All"}
                />
                 <ProjectTag
                onClick={handleTagChange}
                name="Web"
                isSelected={tag === "Web"}
                />
                 <ProjectTag
                onClick={handleTagChange}
                name="Mobile"
                isSelected={tag === "Mobile"}
                />
            </div>
            <div className="grid md:grid-cols-3 gap-8 md:gap-12">
                {projectDatas.map((project) =>(
                <ProjectsCard
                 key={project.id}
                 title={project.title}
                  description={project.description}
                   imgUrl={project.image}
                   gitUrl={project.gitUrl}
                   previewUrl={project.previewUrl}
                   

                    />
                ))}
            </div>
        </>
    )
}

export default ProjectsSection;