import Welcome from "@/pages/dashboard/Home/Welcome";
import { Helmet } from "react-helmet-async";
import CardSection from "./CardSection";
import Charts from "@/pages/dashboard/Home/Charts";
import UserListTable from "./RecentInfo";

const AdminDashboard = () => {
  return (
    <>
      <Helmet>
        <title>Dashboard - Recover Ease</title>
      </Helmet>
      <Welcome />
      <CardSection />
      <UserListTable />
      <Charts />
    </>
  );
};

export default AdminDashboard;
