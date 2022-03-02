// Styles
import { Wrapper, Logo, Signin, NavBar } from "./styles";

// Images
import logo from "../../Logo.png";

const Nav = () => {
  return (
    <Wrapper>
      <NavBar>
        <Logo src={logo} alt="logo"></Logo>
        <Signin>Sign In</Signin>
      </NavBar>
    </Wrapper>
  );
};

export default Nav;
