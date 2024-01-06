import React from "react";

interface Project {
    image: string,
    title: string,
    skills: string[],
    github: string,
    desc: string,
    moreInfo: string
}

const ProjectDetail: React.FC<Project> = ({ title, image, github, desc, skills, moreInfo }) => {
    return (
        <div className="container w-7/12 project-detail flex flex-row-reverse
         justify-start content-start mx-auto gap-4 mb-2
        hover:bg-white1 p-4">
            <img src={image} alt={title}></img>

            <div>
                <div className="flex flex-row items-center gap-4 project-header mb-2">
                    <a className="hover:text-purple0" href={moreInfo}><h3 className="text-2xl">{title}</h3></a>
                    <span className="text-red0 text-xl hover:text-purple0"><a href={github}>GitHub</a></span>

                </div>
                <div className="skill-container flex flex-row">
                    {skills.map((skill, index) => (
                        <span key={index} className="flex skill justify-center outline-none mb-2
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