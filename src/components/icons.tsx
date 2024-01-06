import React from 'react'


interface IconsProps {
    label: string;
}

const Icons: React.FC<IconsProps> = ({ label }) => {
    return (
        <p className="mt-4 text-xl">
            {label}
        </p>
    )
}



export default Icons;