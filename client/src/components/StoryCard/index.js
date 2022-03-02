// styles
import {
  Container,
  Wrapper,
  Left,
  Right,
  Title,
  SubTitle,
  Image,
} from "./styles";

const StoryCard = ({ flip, title, subTitle, img }) => {
  return (
    <Container>
      <Wrapper flip={flip}>
        <Left>
          <Title>{title}</Title>
          <SubTitle>{subTitle}</SubTitle>
        </Left>
        <Right>
          <Image src={img} />
        </Right>
      </Wrapper>
    </Container>
  );
};

export default StoryCard;
