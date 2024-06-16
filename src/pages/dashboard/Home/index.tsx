import { Helmet } from "react-helmet-async";
import Charts from "./Charts";
import Welcome from "./Welcome";

const Dashboard = () => {
  return (
    <>
      <Helmet>
        <title>Dashboard - Recover Ease</title>
      </Helmet>
      <Welcome />
      <Charts />
    </>
  );
};

export default Dashboard;
