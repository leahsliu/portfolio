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
        <div className="container w-7/12 project-detail flex flex-row-reverse justify-start content-start mx-auto gap-4 mb-2">
            <img src={image} alt={title}></img>

            <div>
                <div className="flex flex-row items-center gap-4 project-header mb-2">
                    <h3 className="text-2xl">{title}</h3>
                    <span className="text-indigo-700
                                     text-xl
                                     "><a href={github}>GitHub</a></span>

                    {/* "inline-block outline-none text-indigo-700
                                     border-none px-2.5 text-base
                                     bg-opacity-10 bg-gray-200 h-7" */}
                </div>
                <div className="skill-container">
                    {skills.map((skill, index) => (
                        <span key={index} className="skill inline-block outline-none 
                                                    border-none text-base mr-2 h-7 px-2.5
                                                    bg-opacity-10 bg-gray-800 text-gray-900">
                            <p className="text-center">{skill}</p>
                        </span>
                    ))}
                </div>
                <p>{desc}</p>
            </div>
        </div>
    )
}

export default ProjectDetail;