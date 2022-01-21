import styled from "styled-components";

export const Container = styled.header`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 4rem;
    border-bottom: 1px solid ${({theme}) => theme.colors.backgroundLight};

    ul {
        display: flex;
        gap: 2rem;
        align-items: center;
    }
`;

type NavLinkProps = {
    isActive: boolean;
}

export const NavLinkContainer = styled.li<NavLinkProps>`

    .routerLink {
        text-transform: uppercase;
        color: ${(props) => props.isActive ? props.theme.colors.primary : props.theme.colors.textHighlight};
        transition: 500ms;

        &:hover {
            opacity: .8;
        }
    }
`;