import { Header } from "../../components/Header"
import { ProjectItemSmall } from "../../components/ProjectItemSmall"
import { ProjectsContainer } from "./styles"
import image from "../../assets/image.jpg";

export const Projects = () => {
    return(
        <ProjectsContainer>
            <Header />
            <main className="container">
                <ProjectItemSmall 
                    title="Projeto 01"
                    type="site"
                    slug="1"
                    imgUrl={image}
                />
                <ProjectItemSmall 
                    title="Projeto 01"
                    type="site"
                    slug="1"
                    imgUrl={image}
                />
                <ProjectItemSmall 
                    title="Projeto 01"
                    type="site"
                    slug="1"
                    imgUrl={image}
                />
                <ProjectItemSmall 
                    title="Projeto 01"
                    type="site"
                    slug="1"
                    imgUrl={image}
                />
            </main>
        </ProjectsContainer>
    )
}