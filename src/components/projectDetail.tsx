import React from "react";
import ReactMarkdown from 'react-markdown';

interface Project {
    image: string,
    title: string,
    skills: string[],
    github: string,
    desc: string,
    moreInfo: string
}

const ProjectDetail: React.FC<Project> = ({ title, image, github, desc, skills, moreInfo }) => {
    const linkStyle = { color: "#932432" };
    return (
        <div className="container w-8/12 project-detail flex lg:flex-row-reverse
                        justify-start content-start mx-auto gap-4 mb-2
                        hover:bg-white1 p-2
                        
                        xsmall:flex-col-reverse sm:flex-col-reverse">
            <img src={image} alt={title}></img>
            <div className="mx-auto sm:max-w-[500px]">
                <div className="flex lg:flex-row items-center gap-4 project-header mb-2
                                xsmall:flex-col sm:flex-col">
                    <a className="hover:text-purple0" href={moreInfo} target="_blank"><h3 className="text-2xl">{title}</h3></a>
                    <span className="text-red0 text-xl hover:text-purple0"><a href={github} target="_blank">GitHub</a></span>

                </div>
                <div className="skill-container flex flex-row flex-wrap">
                    {skills.map((skill, index) => (
                        <span key={index} className="flex skill justify-center outline-none mb-2
                                                    border-none text-base mr-2 h-7 px-2.5
                                                    bg-opacity-10 bg-gray-800 text-gray-900">
                            <p className="text-center">{skill}</p>
                        </span>
                    ))}
                </div>
                <span><ReactMarkdown
                    components={{
                        a: ({ href, children }) => (
                            <a href={href} style={linkStyle} target="_blank" rel="noopener noreferrer">
                                {children}
                            </a>
                        ),
                    }}>{desc}</ReactMarkdown></span>
            </div>
        </div>
    )
}

export default ProjectDetail;