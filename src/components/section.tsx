import { ReactNode } from "react"

type SectionProps = {
    title?:string,
    children: ReactNode
}

const SectionProps = ({title, children}:SectionProps) => {
return (
    <section>
        <h2>{title}</h2>
        <p>{children}</p>
    </section>
)
}


export default SectionProps