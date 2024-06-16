import { Helmet } from "react-helmet-async";
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
      <Helmet>
        <title>Recover Ease</title>
      </Helmet>
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
