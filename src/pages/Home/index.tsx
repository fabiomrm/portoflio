import { Experiences } from "../../components/Experiences"
import { FormContact } from "../../components/FormContact"
import { Header } from "../../components/Header"
import { HomeHero } from "../../components/HomeHero"
import { Knowledges } from "../../components/Knowledges"
import { Projects } from "../../components/Projects"
import { Footer } from "../../components/Footer"

import { HomeContainer } from "./styles"

export const Home = () => {
    return(
        <HomeContainer>
            <Header />
            <main className="container">
                <HomeHero />
                <Experiences />
                <Projects />
                <Knowledges />
                <FormContact />
            </main>
                <Footer />
        </HomeContainer>
    )
}