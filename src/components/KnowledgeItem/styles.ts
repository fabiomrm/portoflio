import styled from "styled-components";

export const KnowledgeContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: .8rem;
    align-items: center;
    justify-content: center;

    p {
        color: ${({ theme }) => theme.colors.primary};
        font-weight: 300;
        font-size: 1.3rem;
        text-transform: uppercase;
    }

    svg {
        width: 6.5rem;
        height: 6.5rem;
        color: ${({ theme }) => theme.colors.secondary};
        transition: 300ms;
    }

    &:hover {
        svg {
            color: ${({ theme }) => theme.colors.primary};
            transform: scale(0.9);
        }
    }

    @media(max-width: 1000px) {
        p {
            font-size: 1rem;
        }

        svg {
            width: 5rem;
            height: 5rem;
        }
    }
`;