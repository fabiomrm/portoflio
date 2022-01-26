import { Container } from "./styles";
import { ExperienceItem } from "../ExperienceItem"
import { SectionTitle } from "../SectionTitle"

export const Experiences = () => {
    return(
        <Container>
            <SectionTitle title="01 ano" description="de experiência"/>

            <section>
                <ExperienceItem />
                <ExperienceItem />
                <ExperienceItem />
                <ExperienceItem />
            </section>
        </Container>
    )
}