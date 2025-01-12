import { HeaderContainer } from "./styles";
import logoL from "../../assets/logo-l.svg";
import { Scroll, Timer } from "phosphor-react";
import { NavLink } from "react-router-dom";

export const Header = () => {
  return (
    <HeaderContainer>
      <img src={logoL} alt="" />
      <nav>
        <NavLink to="/home" title="Timer">
          <Timer />
        </NavLink>
        <NavLink to="/history" title="History">
          <Scroll />
        </NavLink>
      </nav>
    </HeaderContainer>
  );
};
