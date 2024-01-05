import ProjectDetail from "./projectDetail"

export const Projects = () => {
    return (
        <div>
            <h2>Projects</h2>
            <ProjectDetail
                github="https://github.com/pdan101/CU-Housing"
                desc="CU Housing is the place for students to find information
                      about on and off-campus housing at Cornell University. 
                      This web database stores college housing reviews using Firebase."
                image=""
                title="Cornell University Housing"
                skills={["React", "Typescript", "Firebase", "Google Maps API", "HTML/CSS"]} />
            <ProjectDetail
                github="https://github.com/leahsliu/music-catalog"
                desc="Designed a media catalog, storing data in SQL relational 
                      databases, employing responsive 
                      design using Docker, PHP and JavaScript. The heart of 
                      the project involved automating the Extract, Transform, 
                      Load (ETL) pipeline using Apache Airflow. This automation
                      daily collects intricate song data, ensuring the catalog 
                      is consistently enriched with the latest information."
                image=""
                title="Music Catalog"
                skills={["Docker", "SQL", "PHP", "JavaScript", "HTML/CSS", "Airflow"]} />
            <ProjectDetail
                github=""
                desc=""
                image=""
                title="Portfolio"
                skills={["React", "Typescript", "HTML/CSS"]} />
        </div>
    )
}