import { Link } from "react-router-dom";

// Components
import FooterCondensed from "../FooterCondensed";

// Images
import logo from "../../Logo.png";

// Styles
import {
  Background,
  Container,
  NavBar,
  Logo,
  Form,
  Title,
  Input,
  Signin,
  Section,
  Text,
  Checkbox,
  Label,
  SignupWrapper,
  Signup,
  LargeText,
} from "./styles";

const Login = () => {
  return (
    <>
      <NavBar>
        <Link to="/">
          <Logo src={logo} alt="Netflix Logo" />
        </Link>
      </NavBar>
      <Background>
        <Container>
          <Form>
            <Title>Sign In</Title>
            <Input
              type="email"
              name="email"
              password="email"
              placeholder="Email or phone number"
            />
            <Input
              type="password"
              name="password"
              id="password"
              placeholder="Password"
            />
            <Signin type="button">Sign In</Signin>
            <Section>
              <div style={{ display: "flex", justifyContent: "center" }}>
                <Checkbox
                  type="checkbox"
                  id="remember-me"
                  name="remember-me"
                  value="remember-me"
                  defaultChecked="checked"
                />
                <Label for="remember-me">Remember me</Label>
              </div>
              <Text>Need Help?</Text>
            </Section>
            <Section>
              <SignupWrapper>
                <LargeText>New to Netflix?</LargeText>
                <Link to="/">
                  <Signup>Sign up now</Signup>
                </Link>
              </SignupWrapper>
            </Section>
            <Label>
              This page is protected by Google reCAPTCHA to ensure you're not a
              bot.
            </Label>
          </Form>
        </Container>
        <FooterCondensed dark={true} />
      </Background>
    </>
  );
};

export default Login;
