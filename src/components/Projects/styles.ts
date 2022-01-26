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
}

`; 