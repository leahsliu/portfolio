import React from 'react'
import Icons from '../components/icons.tsx';

interface ProjectLinkProps {
    href: string;
    label: string;
    iconSrc: string
}

const Links: React.FC<ProjectLinkProps> = ({ href, label, iconSrc }) => {
    return (
        <div key={label}>
            <a className="flex flex-col items-center hover:text-purple0" href={href}>
                <i className={`fas ${iconSrc}`}></i>
                <Icons label={label}></Icons>
            </a>
        </div>
    )
}



export default Links;