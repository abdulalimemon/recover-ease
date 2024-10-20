import { Helmet } from "react-helmet-async";
import Charts from "./Charts";
import Welcome from "./Welcome";
import CardSection from "@/pages/admin/home/CardSection";

const UserDashboard = () => {
  return (
    <>
      <Helmet>
        <title>Dashboard - Recover Ease</title>
      </Helmet>
      <Welcome />
      <CardSection />
      <Charts />
    </>
  );
};

export default UserDashboard;
