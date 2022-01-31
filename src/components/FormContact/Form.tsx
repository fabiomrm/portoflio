import { FormContainer, Input, TextArea } from "./styles"

export const Form = () => {
    return(
        <FormContainer>
            <Input placeholder="Nome" required/>
            <Input placeholder="Email" type="email" required/>
            <TextArea placeholder="Mensagem" required/>
            <button type="submit">ENVIAR</button>       
        </FormContainer>
    )
}