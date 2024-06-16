import { Helmet } from "react-helmet-async";
import FaqSection from "./FaqSection";

const FAQ = () => {
  return (
    <>
      <Helmet>
        <title>FAQ - Recover Ease</title>
      </Helmet>
      <FaqSection />
    </>
  );
};

export default FAQ;
