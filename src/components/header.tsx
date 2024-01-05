import Icons from "../components/icons.tsx";
import GithubIcon from "../assets/logos/github.png"
import LinkedIcon from "../assets/logos/linkedin.png"
import ProjectsIcon from "../assets/logos/projects.png"



const Header = () => {
    return (
        <div className="container flex flex-col items-center h-screen mx-auto">

            <div className="header flex flex-col items-center justify-center gap-5 flex-grow">
                <h1 className="text-7xl">Leah Liu</h1>
                <p className="text-xl">Cornell CS+IS '24</p>
            </div>
            <div className="flex flex-row gap-12 mb-20">
                <div>
                    <a href="#projects">
                        <img src={ProjectsIcon} /><Icons label="Projects"></Icons>
                    </a>
                </div>

                <div>
                    <a href="https://github.com/leahsliu">
                        <img src={GithubIcon} /><Icons label="GitHub"></Icons>
                    </a>
                </div>

                <div>
                    <a href="https://www.linkedin.com/in/leahsliu/">
                        <img src={LinkedIcon} /><Icons label="LinkedIn"></Icons>
                    </a>
                </div>
            </div>
        </div>


    )


}

export default Header;