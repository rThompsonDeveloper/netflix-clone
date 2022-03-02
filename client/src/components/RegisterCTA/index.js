// Styles
import { Text, Wrapper, Input, Button } from "./styles";

const RegisterCTA = () => {
  return (
    <>
      <Text>
        Ready to watch? Enter your email to create or restart your membership.
      </Text>
      <Wrapper>
        <Input placeholder="Email Address" />
        <Button>Get Started</Button>
      </Wrapper>
    </>
  );
};

export default RegisterCTA;
