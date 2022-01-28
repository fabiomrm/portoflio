import { ReactNode } from "react"
import { KnowledgeContainer } from "./styles"

type Props = {
    title: string;
    icon: ReactNode;
}
export const KnowledgeItem = ( { title, icon}: Props) => {
    return(
        <KnowledgeContainer>
            <p>{title}</p>
            {icon}
        </KnowledgeContainer>
    )
}