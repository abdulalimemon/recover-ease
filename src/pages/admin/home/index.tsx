import Welcome from "@/pages/dashboard/Home/Welcome";
import { Helmet } from "react-helmet-async";
import CardSection from "./CardSection";

const AdminDashboard = () => {
  return (
    <>
      <Helmet>
        <title>Dashboard - Recover Ease</title>
      </Helmet>
      <Welcome />
      <CardSection />
    </>
  );
};

export default AdminDashboard;
