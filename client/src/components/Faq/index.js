// Components
import Accordion from "../Accordion";
import RegisterCTA from "../RegisterCTA";

// Static Data
import { faqs } from "./faqs";

// Styles
import { Container, Title, Wrapper } from "./styles";

const Faq = () => {
  return (
    <Container>
      <Wrapper>
        <Title>Frequently Asked Questions</Title>
        {faqs.map((faq, i) => (
          <Accordion key={i} title={faq.title} content={faq.content} />
        ))}
        <RegisterCTA />
      </Wrapper>
    </Container>
  );
};

export default Faq;
