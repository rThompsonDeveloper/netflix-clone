// Components
import Faq from "../Faq";
import StoryCard from "../StoryCard";
import RegisterCTA from "../RegisterCTA";
import Nav from "../Nav";
import Footer from "../Footer";

// Static Data
import { cards } from "./storyCards";

// Styles
import {
  BannerWrapper,
  BannerContent,
  Gradient,
  BannerTitle,
  BannerSubtitle,
} from "./styles";

const Home = () => {
  return (
    <>
      <Nav />
      <BannerWrapper>
        <Gradient>
          <BannerContent>
            <BannerTitle>Unlimited movies, TV shows, and more.</BannerTitle>
            <BannerSubtitle>Watch anywhere. Cancel anytime.</BannerSubtitle>
            <RegisterCTA />
          </BannerContent>
        </Gradient>
      </BannerWrapper>
      {cards.map(({ title, subTitle, img }, i) => (
        <StoryCard
          key={i}
          title={title}
          subTitle={subTitle}
          img={img}
          flip={i % 2 === 0}
        />
      ))}
      <Faq />
      <Footer />
    </>
  );
};

export default Home;
