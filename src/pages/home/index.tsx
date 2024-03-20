import Gallary from "./Gallary";
import HeroHome from "./Hero.home";
import HowUCanHelp from "./HowUCanHelp";
import HowWeRespond from "./HowWeRespond";
import Newsletter from "./Newsletter";
import ReliefGoodsPosts from "./ReliefGoodsPosts";
import Testimonials from "./Testimonials";
import WhoWeAre from "./WhoWeAre";

const Home = () => {
  return (
    <>
      <HeroHome />
      <ReliefGoodsPosts />
      <Testimonials />
      <WhoWeAre />
      <HowWeRespond />
      <Gallary />
      <HowUCanHelp />
      <Newsletter />
    </>
  );
};

export default Home;
