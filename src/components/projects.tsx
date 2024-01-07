import ProjectDetail from "./projectDetail"

export const Projects = () => {
    return (
        <div id="projects" className="scroll-smooth">
            <h2 className="text-center text-5xl mb-12">Projects</h2>
            <ProjectDetail
                github="https://github.coecis.cornell.edu/tjl223/INFO3300Project2"
                desc="The visualization depicts the 
                      number of unique words used in the lyrics of one of the 
                      artists' top 5 most popular songs and the number of the 
                      artists' songs that made it on the Billboard Hot 100™.
                      It was created using D3.js and contains data scraped from
                      Billboard using BeautifulSoup and saved as JSON files. Other
                      data sources we used include Genius API via LyricsGenius
                      to retrieve the number of unique words in artists' lyrics, 
                      Spotify API to retrieve the collaborators for artists, and
                      pudding.cool to scrape artist headshots and get a list of rappers
                      from the 2010s."
                image="assets/project-images/placeholder.jpg"
                title="Rapper Hits Data Visualization"
                skills={["Javascript (D3)", "Python", "Bootstrap", "HTML/CSS"]}
                moreInfo="https://leahliuportfolio.notion.site/Rapper-Data-Visualization-using-D3-0c9169b59b5c4ff788d9a617bf644434?pvs=4" />
            <ProjectDetail
                github="https://github.com/pdan101/CU-Housing"
                desc="CU Housing is the place for students to find information
                      about on and off-campus housing at Cornell University. 
                      This web database stores college housing reviews using Firebase."
                image="assets/project-images/placeholder.jpg"
                title="Cornell University Housing"
                skills={["React", "Typescript", "Firebase", "HTML/CSS"]}
                moreInfo="https://leahliuportfolio.notion.site/CU-Housing-6b40fccb207b4b35829ee23754e4e417?pvs=4" />
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
                skills={["Docker", "SQL", "PHP", "Javascript", "HTML/CSS", "Airflow"]}
                moreInfo="https://github.com/leahsliu/music-catalog" />
            <ProjectDetail
                github="https://github.com/leahsliu/applefest-project"
                desc="I created this website with the purpose of redesigning
                      the Apple Harvest Festival's website for ease of use
                      and accessibility. Please click [here](https://leahliuportfolio.notion.site/Apple-Harvest-Festival-b1158743f1804351a3068030f847cf28?pvs=4) to see my design process
                      in detail."
                image="assets/project-images/placeholder.jpg"
                title="Apple Harvest Festival"
                skills={["Javascript", "PHP", "HTML/CSS"]}
                moreInfo="https://leahliuportfolio.notion.site/Apple-Harvest-Festival-b1158743f1804351a3068030f847cf28?pvs=4" />
            <ProjectDetail
                github="https://github.com/leahsliu/portfolio"
                desc="Personal website with some recent projects. Want to see how my 
                      website has evolved over the years? Click 
                      [here](https://leahliuportfolio.notion.site/Portfolio-c954266db8ca4334b01547f707fb79ed?pvs=4)
                      to see videos and past tech stacks used."
                image="assets/project-images/placeholder.jpg"
                title="Portfolio"
                skills={["React", "Typescript", "Tailwind CSS"]}
                moreInfo="https://leahliuportfolio.notion.site/Portfolio-c954266db8ca4334b01547f707fb79ed?pvs=4" />
        </div >
    )
}