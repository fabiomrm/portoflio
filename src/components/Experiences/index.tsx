import { Container } from "./styles";
import { ExperienceItem } from "../ExperienceItem"
import { SectionTitle } from "../SectionTitle"

export const Experiences = () => {
    return(
        <Container>
            <SectionTitle title="01 ano" description="de experiência"/>


            <section>
                <ExperienceItem year={2022} title="Fullstack" description="Lorem ipsum dolor sit amet consectetur adipisicing elit."/>
                <ExperienceItem year={2022} title="Fullstack" description="Lorem ipsum dolor sit amet consectetur adipisicing elit."/>
                <ExperienceItem year={2022} title="Fullstack" description="Lorem ipsum dolor sit amet consectetur adipisicing elit."/>
                <ExperienceItem year={2022} title="Fullstack" description="Lorem ipsum dolor sit amet consectetur adipisicing elit."/>
            </section>
        </Container>
    )
}