import { Container } from './styles';
import { AiOutlineGithub, AiFillLinkedin } from 'react-icons/ai';

export const Footer = () => {

    const handleRedirect = (url: string) => {
        window.open(url);
    }

    const handleScrollTop = () => {
        window.scroll({
            top:0,
            behavior: 'smooth'
        });
    }


    return(
        <Container>
            <div className="container">
                <button type="button" onClick={handleScrollTop}>Voltar ao topo</button>
                <section>
                    <AiOutlineGithub 
                        onClick={() => handleRedirect("https://github.com/fabiomrm")}
                        className="svg"
                    />
                    <AiFillLinkedin 
                        onClick={() => handleRedirect("https://linkedin.com/in/fabiomrm")}
                        className="svg"
                    />
                </section>
            </div>
            
        </Container>
    )
}