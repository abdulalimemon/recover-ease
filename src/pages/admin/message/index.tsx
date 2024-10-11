import { Helmet } from "react-helmet-async";
import AllMessageTable from "./AllMessageTable";

const Message = () => {
  return (
    <div>
      <Helmet>
        <title>Message - Recover Ease</title>
      </Helmet>
      <h2 className="text-center text-xl font-semibold py-5">All Messages.</h2>
      <AllMessageTable />
    </div>
  );
};

export default Message;
