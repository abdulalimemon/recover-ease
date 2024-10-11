import { Helmet } from "react-helmet-async";
import AllReliefGoodsTable from "./AllReliefGoodsTable";

const ReliefGoods = () => {
  return (
    <div>
      <Helmet>
        <title>Relief Goods - Recover Ease</title>
      </Helmet>
      <h2 className="text-center text-xl font-semibold py-5">
        All Relief Goods.
      </h2>
      <AllReliefGoodsTable />
    </div>
  );
};

export default ReliefGoods;
