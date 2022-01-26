import styled from "styled-components";

export const Container = styled.section`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 5rem;

    > section {
        width: 100%;
        display: flex;
        flex-direction: column;
        gap: 4rem;

        @media(max-width: 1000px) {
            gap: 2rem;
        }
    }

    > button {
        background: ${({ theme }) => theme.colors.primary};
        padding: .8rem 3rem;
        border-radius: .5rem;
        border: none;
        
        transition: 500ms;

        &:hover {
            background: #0E97F9;
        }

        span {
            text-transform: uppercase;
            color: #FFF;
            font-size: 1.5rem;
            font-weight: 300;
        }

        @media(max-width: 500px) {
            padding: 1rem;
            span {
                font-size: 1rem;
            }
        }

        
    }
}

`; 