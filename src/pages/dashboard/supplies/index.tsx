import { Button } from "@/components/ui/button";
import AllSuppliesTable from "./AllSuppliesTable";
import { Link } from "react-router-dom";
import { Plus } from "lucide-react";

const Supplies = () => {
  return (
    <div>
      <h2 className="text-center text-xl font-semibold py-5">
        All Supply Posts.
      </h2>
      <div className="text-right lg:px-10">
        <Button>
          <Plus className="size-4 mr-2" />
          <Link to="/dashboard/create-supplies">Add Supply Post</Link>
        </Button>
      </div>
      <AllSuppliesTable />
    </div>
  );
};

export default Supplies;
