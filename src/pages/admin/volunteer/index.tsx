import { Helmet } from "react-helmet-async";
import AllVolunteerTable from "./AllVolunteerTable";

const AllVolunteer = () => {
  return (
    <div>
      <Helmet>
        <title>Volunteer - Recover Ease</title>
      </Helmet>
      <h2 className="text-center text-xl font-semibold py-5">
        Volunteer User.
      </h2>
      <AllVolunteerTable />
    </div>
  );
};

export default AllVolunteer;
