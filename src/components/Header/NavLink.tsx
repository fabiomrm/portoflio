import { NavLinkContainer } from "./styles";
import { Link, useLocation } from "react-router-dom";


type Props = {
    title: string;
    to: string;
}

export const NavLink = ({ title, to }: Props) => {
    const location = useLocation();
    

    const isActive = location.pathname === to;
    

    return(
        <NavLinkContainer isActive={isActive}>
            <Link  className="routerLink" to={to}>{title}</Link>
        </NavLinkContainer>
    );
}