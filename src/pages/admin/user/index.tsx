import { Helmet } from "react-helmet-async";
import AllUserTable from "./AllUserTable";

const User = () => {
  return (
    <div>
      <Helmet>
        <title>User - Recover Ease</title>
      </Helmet>
      <h2 className="text-center text-xl font-semibold py-5">All User.</h2>
      <AllUserTable />
    </div>
  );
};

export default User;
