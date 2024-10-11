import { Helmet } from "react-helmet-async";
import AllDonationsTable from "./AllDonationsTable";

const Donations = () => {
  return (
    <div>
      <Helmet>
        <title>Donations - Recover Ease</title>
      </Helmet>
      <h2 className="text-center text-xl font-semibold py-5">All Donations.</h2>
      <AllDonationsTable />
    </div>
  );
};

export default Donations;
