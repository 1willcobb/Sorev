import Sorev_Carrd from "/src/images/Sorev_Carrd.svg";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

const StyledLogo = styled.img`
  height: 80px;
  object-fit: contain;
  transition: transform 0.2s ease;
  background: none;
  &:hover{
    transform: scale(0.98);
    filter: drop-shadow(5px 5px 5px rgb(0 0 0 / 0.25));
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
