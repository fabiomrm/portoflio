import { ProjectContainer } from "./styles"
import { AiOutlineRightCircle } from "react-icons/ai";
import { Link } from 'react-router-dom';
import image from "../../assets/image.jpg";

export const ProjectItem = () => {
    return(
        <ProjectContainer imgUrl={image}>
            <section>
                <div className="overlay" />
                <div className="text">
                    <h1>Projeto 01</h1>
                    <h2>- Blog</h2>
                </div>
            </section>
            <button type="button">
                <Link to="/projeto">
                    <span>
                        Ver mais
                        <AiOutlineRightCircle />
                    </span> 
                </Link>
            </button>
        </ProjectContainer>
    )
}