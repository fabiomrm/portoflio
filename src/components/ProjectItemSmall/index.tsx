import { Container } from "./styles"
import { Link } from 'react-router-dom';


type Props = {
    title: string;
    type: string;
    imgUrl: string;
    slug: string;
}

export const ProjectItemSmall = ({title, type, imgUrl, slug}: Props) => {
    return(
        <Container>
            <Link to={`/projetos/${slug}`}>
                <span>
                    <div className="overlay"/>
                    <section>
                        <h1>{title}</h1>
                        <h2>{type}</h2>
                    </section>
                </span>
            </Link>
        </Container>
    )
}