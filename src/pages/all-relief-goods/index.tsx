import { Helmet } from "react-helmet-async";
import AllPost from "./AllPost";
import AllReliefBreadcrumb from "./AllReliefBreadcrumb";

const AllReliefGoods = () => {
  return (
    <>
      <Helmet>
        <title>All Relief Goods - Recover Ease</title>
      </Helmet>
      <AllReliefBreadcrumb />
      <AllPost />
    </>
  );
};

export default AllReliefGoods;
