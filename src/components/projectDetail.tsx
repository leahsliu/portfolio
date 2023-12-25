import React from "react";

interface Project {
    image: string,
    title: string,
    skills: string[],
    github: string,
    desc: string
}

const ProjectDetail: React.FC<Project> = ({ title, image, github, desc, skills }) => {
    return (
        <div className="project-detail">
            <img src={image} alt={title}></img>

            <div>
                <div className="project-header">
                    <h3>{title}</h3>
                    <span><a href={github}>GitHub</a></span>
                </div>
                <div className="skill-container">
                    {skills.map((skill, index) => (
                        <span key={index} className="skill">
                            {skill}
                        </span>
                    ))}
                </div>
                <p>{desc}</p>
            </div>
        </div>
    )
}

export default ProjectDetail;