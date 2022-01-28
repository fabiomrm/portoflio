import { AiFillHtml5 } from 'react-icons/ai';
import { SiTsnode } from 'react-icons/si';
import { IoLogoJavascript } from 'react-icons/io';
import { FaCss3Alt, FaReact, FaJava } from 'react-icons/fa';
import { KnowledgeItem } from '../KnowledgeItem';
import { SectionTitle } from '../SectionTitle';
import { Container } from './styles';

export const Knowledges = () => {
    return(
        <Container>
            <SectionTitle title="Conhecimentos"/>
            <section>
                <KnowledgeItem title="HTML" icon={<AiFillHtml5 />}/>
                <KnowledgeItem title="CSS" icon={<FaCss3Alt />}/>
                <KnowledgeItem title="JS" icon={<IoLogoJavascript />}/>
                <KnowledgeItem title="REACT" icon={<FaReact />}/>
                <KnowledgeItem title="Node" icon={<SiTsnode />}/>
                <KnowledgeItem title="Java" icon={<FaJava />}/>
            </section>
        </Container>
    )
}