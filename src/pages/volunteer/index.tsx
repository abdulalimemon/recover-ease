import { Helmet } from "react-helmet-async";
import BenefitsOfVolunteering from "./BenefitsOfVolunteering";
import HowGetInvolved from "./HowGetInvolved";
import VolunteerBanner from "./VolunteerBanner";
import VolunteerForm from "./VolunteerForm";

const Volunteer = () => {
  return (
    <>
      <Helmet>
        <title>Volunteer - Recover Ease</title>
      </Helmet>
      <VolunteerBanner />
      <HowGetInvolved />
      <BenefitsOfVolunteering />
      <VolunteerForm />
    </>
  );
};

export default Volunteer;
