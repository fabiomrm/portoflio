import styled from "styled-components";

type ProjectProps = {
    imgUrl: string;
}

export const ProjectContainer = styled.div<ProjectProps>`
    width: 100%;
    display: flex;
    height: 25rem;
    align-items: flex-end;
    position: relative;

    > section {
        width: 50rem;
        height: 100%;
        background: url(${(props) => props.imgUrl}) no-repeat center;
        background-size: cover;
        position: relative;

        > div.overlay {
            position: absolute;
            width: 100%;
            background: ${({ theme }) => theme.colors.gradient};
            oppacity: .75;

            transition: 500ms;
        }

        > div.text {
            position: absolute;
            top: 3rem;
            right: -8rem;
            width: fit-content;

            transition: 500ms;
        }

        h1 {
            color: ${({ theme }) => theme.colors.primary};
            font-size: 2rem;
            text-shadow: -4px 5px 22px #11172b;
        }

        h2 {
            color: ${({ theme }) => theme.colors.secondary};
            font-weight: 300;
            font-size: 2rem;
            text-shadow: -4px 5px 22px #11172b;
        }
    }

    > button {
        height: 4rem;
        margin: 0 0 3rem 4rem;
        background: none;
        border: none;

        span {
            font-weight: 300;
            font-size: 2rem;
            color: #fff;

            display: flex;
            align-items: center;
            gap: .8rem;

            transition: 500ms;
        }
    }

    
`;