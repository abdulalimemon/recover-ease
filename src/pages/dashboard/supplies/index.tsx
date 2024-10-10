import { Button } from "@/components/ui/button";
import AllSuppliesTable from "./AllSuppliesTable";
import { Link } from "react-router-dom";
import { Plus } from "lucide-react";
import { Helmet } from "react-helmet-async";
import { useAppSelector } from "@/redux/hooks";

const Supplies = () => {
  const userInfo = useAppSelector((state) => state.auth.user);
  return (
    <div>
      <Helmet>
        <title>Supplies - Recover Ease</title>
      </Helmet>
      <h2 className="text-center text-xl font-semibold py-5">
        All Supply Posts.
      </h2>
      {userInfo?.role === "admin" && (
        <div className="text-right lg:px-10">
          <Button>
            <Plus className="size-4 mr-2" />
            <Link to="/admin/create-supplies">Add Supply Post</Link>
          </Button>
        </div>
      )}

      <AllSuppliesTable />
    </div>
  );
};

export default Supplies;
