import styled from "styled-components";

export const Container = styled.div`
    > a {
        position: relative;
        width: 100%;
        background: #CCC;
        height: 10rem;
        padding: 1.5rem;
        display: flex;
        align-items: flex-end;
        justify-content: flex-start;
        border-radius: .5rem;
        border: 1px solid ${({ theme }) => theme.colors.border};
        transition: .5s;
        cursor: pointer;
        overflow: hidden;

        
    }

     span > section {
        h1 {
            color: ${( { theme }) => theme.colors.primary};
        }
        h2 {
            color: ${({ theme }) => theme.colors.secondary};
            font-weight: 300;
            font-size: 1rem;
        }
    }

    span > div.overlay {
        position: absolute;
        left: 0;
        bottom: 0;
        width: 100%;
        height: 100%;
        background: ${({ theme }) => theme.colors.gradient};
        opacity: 0.4;
        transition: 0.5s;
    }
`;