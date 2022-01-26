import { ProjectItem } from "../ProjectItem";
import { SectionTitle } from "../SectionTitle"
import { Container } from './styles';
import { Link } from 'react-router-dom';
import image from "../../assets/image.jpg";

export const Projects = () => {
    return(
        <Container>
            <SectionTitle title="Meus Projetos"/>

            <section>
                <ProjectItem title="Projeto 1" img={image} slug="1" type="Blog"/>
                <ProjectItem title="Projeto 2" img={image} slug="2" type="Site"/>
                <ProjectItem title="Projeto 3" img={image} slug="3" type="Mapa"/>
                <ProjectItem title="Projeto 4" img={image} slug="4" type="Social"/>

            </section>
            <button type="button">
                <Link to="/projetos">
                    <span>Ver todos os projetos</span>
                </Link>
            </button>
        </Container>
    )
}