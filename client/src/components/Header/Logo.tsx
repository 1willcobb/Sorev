import Sorev_Carrd from "../../assets/Sorev_Carrd.svg";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

const StyledLogo = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
  transition: transform 0.2s ease;
  &:hover{
    transform: scale(0.98);
  }
`

const Logo = () => {
  return (
    <NavLink to={"/"}>
      <StyledLogo src={Sorev_Carrd} />
    </NavLink>
  );
};

export default Logo;
