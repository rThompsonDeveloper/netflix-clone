// Styles
import { Container, Wrapper, Section, Text, Title } from "./styles";

const Footer = () => {
  return (
    <Container>
      <Wrapper>
        <Title>Questions? Call 1-888-888-8888</Title>
      </Wrapper>
      <Wrapper>
        <Section>
          <Text>FAQ</Text>
          <Text>Investor Relations</Text>
          <Text>Ways to Watch</Text>
          <Text>Corporate Information</Text>
          <Text>Only on Netflix</Text>
        </Section>
        <Section>
          <Text>Help Center</Text>
          <Text>Jobs</Text>
          <Text>Terms of Use</Text>
          <Text>Contact Us</Text>
        </Section>
        <Section>
          <Text>Account</Text>
          <Text>Redeem Gift Cards</Text>
          <Text>Privacy</Text>
          <Text>Speed Test</Text>
        </Section>
        <Section>
          <Text>Media Center</Text>
          <Text>Buy Gift Cards</Text>
          <Text>Cookie Preferences</Text>
          <Text>Legal Notices</Text>
        </Section>
      </Wrapper>
    </Container>
  );
};

export default Footer;
