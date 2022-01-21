import * as Styled from './styles';
import { NavLink } from './NavLink';

export const Header = () => {
    return (
        <Styled.Container>
            <ul>
                <NavLink to="/" title="home"/>
                <NavLink to="/projetos" title="projetos"/>
            </ul>
        </Styled.Container>
    );
}