import Icons from "../components/icons.tsx";
import GithubIcon from "../assets/logos/github.png"
import LinkedIcon from "../assets/logos/linkedin.png"
import ProjectsIcon from "../assets/logos/projects.png"



const Header = () => {
    return (
        <div>

            <div className="header">
                <h1>Leah Liu</h1>
                <p>Code and coffee ☕, brewed at Cornell</p>
            </div>

            <div className="links">
                <a href="#projects">
                    <img src={ProjectsIcon} /><Icons label="Projects"></Icons>
                </a>
            </div>

            <div className="links">
                <a href="https://github.com/leahsliu">
                    <img src={GithubIcon} /><Icons label="GitHub"></Icons>
                </a>
            </div>

            <div className="links">
                <a href="https://www.linkedin.com/in/leahsliu/">
                    <img src={LinkedIcon} /><Icons label="LinkedIn"></Icons>
                </a>
            </div>
        </div>


    )


}

export default Header;