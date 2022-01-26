import { ProjectItem } from "../ProjectItem";
import { SectionTitle } from "../SectionTitle"
import { Container } from './styles';

export const Projects = () => {
    return(
        <Container>
            <SectionTitle title="Meus Projetos"/>

            <section>
                <ProjectItem />
            </section>
        </Container>
    )
}