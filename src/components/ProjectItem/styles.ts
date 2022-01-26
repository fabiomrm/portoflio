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

    &:hover {
        > section {
            > div.text {
                right: -10rem;
            }

            > div.overlay {
                opacity: .4;
            }
        }

        > button span {
            color: ${({ theme }) => theme.colors.primary};
        }
    }

    > section {
        width: 50rem;
        height: 100%;
        background: url(${(props) => props.imgUrl}) no-repeat center;
        background-size: cover;
        position: relative;

        > div.overlay {
            position: absolute;
            width: 100%;
            height: 100%;
            background: ${({ theme }) => theme.colors.gradient};
            opacity: .6;

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

    &:nth-child(2n) {
        flex-direction: row-reverse;

        > button {
            margin: 3rem 5rem 0 0;
        }

        > section {
            div.text {
                text-align: right;
                right: 0;
                left: -8rem;
            }
        }

        &:hover {
            > section {
                > div.text {
                    left: -10rem;
                }
            }
        }
    }

    @media(max-width: 1450px) {
        > section {
            width: 40rem;
        }
    }

    @media(max-width: 1000px) {
        > section {
            width: 100%;

            > div.text {
                left: 1rem;
                top: 1rem;
            }
        }

        > button {
            position: absolute;
            bottom: 1rem;
            right: 1rem;
            margin: 0;
        }

        &:nth-child(2n) {
            flex-direction: row;
            > section {
                width: 100%;

                div.text {
                    left:1rem;
                    top:1rem;
                    text-align: left;
                }
            }

            > button {
                position: absolute;
                bottom: 1rem;
                right: 1rem;
                margin: 0;
            }

            &:hover {
                > section > div.text {
                    left: 1rem;
                }
            }
        }

    }

    @media(max-width: 700px) {
        height: 17rem;
    }

    @media(max-width: 450px) {
        > button {
            height: auto;

            span {
                font-size: 1.5rem;
                gap: .8rem;
            }
        }

        > section > div.text {
            h1 {
                font-size: 1.5rem;
            }
            h2 {
                font-size: 1rem;
            }
        }
    }
`;