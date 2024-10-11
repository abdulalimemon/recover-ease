import { Helmet } from "react-helmet-async";
import AllNewslettersTable from "./AllNewslettersTable";

const Newsletters = () => {
  return (
    <div>
      <Helmet>
        <title>Newsletters Subscription - Recover Ease</title>
      </Helmet>
      <h2 className="text-center text-xl font-semibold py-5">
        All Newsletters Subscription.
      </h2>
      <AllNewslettersTable />
    </div>
  );
};

export default Newsletters;
