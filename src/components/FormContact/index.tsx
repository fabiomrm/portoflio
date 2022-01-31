import { SectionTitle } from "../SectionTitle"
import { Form } from './Form';
import { Container } from './styles';

export const FormContact = () => {
    return(
        <Container>
            <SectionTitle 
                title={
                    <>
                        Precisa dos
                        <br/>
                        meus serviços
                    </>
                }
                description={
                    <>
                        Preencha o formulário abaixo que
                        <br/>
                        irei retornar em breve
                    </>
                }
            />

            <Form />
        </Container>
    )
}