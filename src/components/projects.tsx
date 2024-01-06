import ProjectDetail from "./projectDetail"

export const Projects = () => {
    return (
        <div id="projects" className="scroll-smooth">
            <h2 className="text-center text-5xl mb-12">Projects</h2>
            <ProjectDetail
                github="https://github.com/pdan101/CU-Housing"
                desc="CU Housing is the place for students to find information
                      about on and off-campus housing at Cornell University. 
                      This web database stores college housing reviews using Firebase."
                image="assets/project-images/placeholder.jpg"
                title="Cornell University Housing"
                skills={["React", "Typescript", "Firebase", "HTML/CSS"]}
                moreInfo="" />
            <ProjectDetail
                github="https://github.com/leahsliu/music-catalog"
                desc="Designed a media catalog, storing data in SQL relational 
                      databases, employing responsive 
                      design using Docker, PHP and JavaScript. The heart of 
                      the project involved automating the Extract, Transform, 
                      Load (ETL) pipeline using Apache Airflow. This automation
                      daily collects intricate song data, ensuring the catalog 
                      is consistently enriched with the latest information."
                image="assets/project-images/placeholder.jpg"
                title="Music Catalog"
                skills={["Docker", "SQL", "PHP", "JavaScript", "HTML/CSS", "Airflow"]}
                moreInfo="" />
            <ProjectDetail
                github="https://github.com/leahsliu/portfolio"
                desc="Personal website with some recent projects. Want to see how my 
                      website has evolved over the years? Click on the 'Portfolio' header
                      to see videos and past tech stacks used."
                image="assets/project-images/placeholder.jpg"
                title="Portfolio"
                skills={["React", "Typescript", "Tailwind CSS"]}
                moreInfo="https://leahliuportfolio.notion.site/Portfolio-c954266db8ca4334b01547f707fb79ed?pvs=4" />
        </div >
    )
}