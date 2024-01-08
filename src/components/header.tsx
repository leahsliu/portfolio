import '../../public/assets/fontawesome/css/fontawesome.css'
import '../../public/assets/fontawesome/css/brands.css'
import '../../public/assets/fontawesome/css/solid.css'
import Links from "./link.tsx";




const Header = () => {

    const projectLinks = [
        { href: '#projects', label: 'Projects', iconSrc: "fa-solid fa-code fa-3x" },
        { href: 'https://github.com/leahsliu', label: 'GitHub', iconSrc: "fa-brands fa-github fa-3x" },
        { href: 'https://www.linkedin.com/in/leahsliu/', label: 'LinkedIn', iconSrc: "fa-brands fa-linkedin fa-3x" },
    ];
    return (

        <div className="container flex flex-col items-center h-screen mx-auto">

            <div className="header flex flex-col items-center justify-center gap-5 flex-grow">
                <h1 className="text-7xl">Leah Liu</h1>
                <p className="text-xl">Cornell CS+IS '24</p>
            </div>
            <div className="flex flex-row gap-8 mb-12">
                {projectLinks.map((link) => (
                    <Links key={link.label} {...link} />
                ))}
            </div>
            <a href="#projects" className="fa-solid fa-arrow-down fa-bounce fa-2xl mb-20"></a>
        </div>


    )


}

export default Header;