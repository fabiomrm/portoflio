import styled from "styled-components";

export const Container = styled.section`

`;

export const FormContainer = styled.form`
    margin-top: 8rem;
    width: 100%;
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 1rem;

    > button {
        border: none;
        padding: 1rem 2.5rem;
        color: #FFF;
        font-weight: 300;
        font-size: 1.2rem;
        border-radius: .5rem;
        background: ${({ theme }) => theme.colors.primary};
        transition: .5s;
        width: fit-content;

        &:disabled {
            opacity: .5;
        }
        
    }

    @media(max-width: 700px) {
        margin-top: 5rem;
        grid-template-columns: 1fr;
    }

    @media(max-width: 700px) {
        > button {
            padding: .8rem 1.5rem;
            font-size: 1rem;
        }
    }

`;

export const Input = styled.input`
    height: 3rem;
    width: 100%;
    background: ${({ theme }) => theme.colors.inputBackground};
    border: 1px solid ${({ theme }) => theme.colors.border};
    padding: 1.7rem 1.5rem;
    color: ${({ theme }) => theme.colors.primary};
    border-radius: 0.5rem;
    font-size: 1.2rem;
    outline: none;
    transition: 0.5s;

    &:focus {
        border-color: ${({ theme }) => theme.colors.primary};
    }

    &::placeholder {
        color: ${({ theme }) => theme.colors.primary};
    }

    @media(max-width: 450px) {
        padding: 1.4rem;
        font-size: 1rem;
    }
`;

export const TextArea = styled.textarea`
    height: 10rem;
    width: 100%;
    background: ${({ theme }) => theme.colors.inputBackground};
    border: 1px solid ${({ theme }) => theme.colors.border};
    padding: 1.7rem 1.5rem;
    color: ${({ theme }) => theme.colors.primary};
    border-radius: 0.5rem;
    font-size: 1.2rem;
    outline: none;
    transition: 0.5s;

    resize: none;

    grid-column: 1 / 3;

    &:focus {
        border-color: ${({ theme }) => theme.colors.primary};
    }

    &::placeholder {
        color: ${({ theme }) => theme.colors.primary};
    }


    @media(max-width: 800px) {
        grid-column: 1;
    }

    @media(max-width: 450px) {
        padding: 1.4rem;
        font-size: 1rem;
    }
`;