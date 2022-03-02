import { Link } from "react-router-dom";

// Images
import logo from "../../Logo.png";

// Styles
import { Wrapper, Logo, Signin, NavBar } from "./styles";

const Nav = () => {
  return (
    <Wrapper>
      <NavBar>
        <Link to="/">
          <Logo src={logo} alt="Netflix Logo" />
        </Link>
        <Link to="/login">
          <Signin type="button">Sign In</Signin>
        </Link>
      </NavBar>
    </Wrapper>
  );
};

export default Nav;
