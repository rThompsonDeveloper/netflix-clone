import { useState } from "react";

// Styles
import { Container, Navbar, Content, Text } from "./styles";

const Accordion = ({ title, content }) => {
  const [open, setOpen] = useState(false);

  return (
    <Container>
      <Navbar onClick={() => setOpen(!open)}>
        <Text>{title}</Text>
        <Text>{open ? "-" : "+"}</Text>
      </Navbar>
      <Content open={open}>
        <Text>{content}</Text>
      </Content>
    </Container>
  );
};

export default Accordion;
