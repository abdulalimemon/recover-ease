import { Helmet } from "react-helmet-async";
import HowWeRespond from "../home/HowWeRespond";
import Newsletter from "../home/Newsletter";
import WhoWeAre from "../home/WhoWeAre";
import AboutUsBanner from "./AboutUsBanner";
import VolunteerList from "./VolunteerList";

const AboutUs = () => {
  return (
    <>
      <Helmet>
        <title>About us - Recover Ease</title>
      </Helmet>
      <AboutUsBanner />
      <WhoWeAre />
      <HowWeRespond />
      <VolunteerList />
      <Newsletter />
    </>
  );
};

export default AboutUs;
