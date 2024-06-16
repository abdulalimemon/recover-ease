import { Helmet } from "react-helmet-async";
import ContactInfo from "./ContactInfo";
import ContactUsBanner from "./ContactUsBanner";

const ContactUs = () => {
  return (
    <>
      <Helmet>
        <title>Contact Us - Recover Ease</title>
      </Helmet>
      <ContactUsBanner />
      <ContactInfo />
    </>
  );
};

export default ContactUs;
