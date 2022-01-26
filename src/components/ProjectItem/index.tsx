import { ProjectContainer } from "./styles"
import { AiOutlineRightCircle } from "react-icons/ai";
import { Link } from 'react-router-dom';


type Props = {
    title: string;
    type: string;
    slug: string;
    img: string;
}

export const ProjectItem = ({ title, type, slug, img}: Props) => {
    return(
        <ProjectContainer imgUrl={img}>
            <section>
                <div className="overlay" />
                <div className="text">
                    <h1>{title}</h1>
                    <h2>- {type}</h2>
                </div>
            </section>
            <button type="button">
                <Link to={`/projetos/${slug}`}>
                    <span>
                        Ver mais
                        <AiOutlineRightCircle />
                    </span> 
                </Link>
            </button>
        </ProjectContainer>
    )
}