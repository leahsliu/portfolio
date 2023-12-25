import React from 'react'


interface IconsProps {
    label: string;
}

const Icons: React.FC<IconsProps> = ({ label }) => {
    return (
        <span className={label}>
            {label}
        </span>
    )
}



export default Icons;