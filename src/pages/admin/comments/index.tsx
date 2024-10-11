import { Helmet } from "react-helmet-async";
import AllCommentsTable from "./AllCommentsTable";

const Comments = () => {
  return (
    <div>
      <Helmet>
        <title>Comments - Recover Ease</title>
      </Helmet>
      <h2 className="text-center text-xl font-semibold py-5">All Comments.</h2>
      <AllCommentsTable />
    </div>
  );
};

export default Comments;
