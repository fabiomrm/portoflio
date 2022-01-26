import { ItemContainer } from "./styles"

type Props = {
    title: string;
    description: string;
    year: number;
}

export const ExperienceItem = ({ title, description, year }: Props) => {
    return(
        <ItemContainer>
            <div>
                <h1>{ year }</h1>
                <h2>{title}</h2>
                <p>{description}</p>
            </div>
            
        </ItemContainer>
    )
}