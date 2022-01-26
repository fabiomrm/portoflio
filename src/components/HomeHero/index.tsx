import { Container, TextContainer, InfoContainer, CodeItem } from "./styles";
import picture from '../../assets/pessoa.webp';

export const HomeHero = () => {
    return(
        <Container>
            <img src={picture} alt="" />
            <div>
                <TextContainer>
                    <h1>Olá,</h1>
                    <h2>Me chamo Fábio</h2>
                </TextContainer>
                <InfoContainer>
                    <CodeItem>
                        <span className="comment">//Minha Apresentação</span>
                        <span className="purple">Infos</span> {'\u007B'}
                        <div>
                            Nome: <span className="blue">Fábio, </span>
                        </div>
                        <div>
                            Sobrenome: <span className="blue">Monteiro </span>
                        </div>
                        {'\u007D'}
                    </CodeItem>
                    <CodeItem>
                        <span className="purple">Infos</span> {'\u007B'}
                        <div>
                            Nome: <span className="blue">Fábio, </span>
                        </div>
                        <div>
                            Sobrenome: <span className="blue">Monteiro </span>
                        </div>
                        {'\u007D'}
                    </CodeItem>
                </InfoContainer>
            </div>
        </Container>
    )
}