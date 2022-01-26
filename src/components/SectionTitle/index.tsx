import { ReactNode } from "react"
import { Container } from './style';

type Props = {
    title: string | ReactNode;
    description ?: string | ReactNode;
}

export const SectionTitle = ({title, description}: Props) => {
    return(
        <Container>
            <h1>#{title}</h1>
            {description && <h2>{description}</h2>}
        </Container>
    )
}