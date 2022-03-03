// Styles
import { Container, Wrapper, Section, Title, Text } from "./styles";

const FooterCondensed = ({ dark }) => {
  return (
    <Container dark={dark}>
      <Wrapper>
        <Title>Questions? Call 1-888-888-8888</Title>
      </Wrapper>
      <Wrapper>
        <Section>
          <Text>FAQ</Text>
          <Text>Cookie Preferences</Text>
        </Section>
        <Section>
          <Text>Help Center</Text>
          <Text>Corporate Information</Text>
        </Section>
        <Section>
          <Text>Terms of use</Text>
        </Section>
        <Section>
          <Text>Privacy</Text>
        </Section>
      </Wrapper>
    </Container>
  );
};

export default FooterCondensed;
