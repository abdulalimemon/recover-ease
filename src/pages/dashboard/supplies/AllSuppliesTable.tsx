import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import AllSuppliesEditModal from "./AllSuppliesEditModal";
import SuppliesDeleteModal from "./SuppliesDeleteModal";
import { useGetSupplyQuery } from "@/redux/features/reliefGoods/supplyApi";
import { TAddSupplyInputs } from "../create-supplies/AddSupplies";
import TableSkeleton from "./TableSkeleton";

const AllSuppliesTable = () => {
  const { data, isLoading, isError } = useGetSupplyQuery(null);
  return (
    <div className="lg:px-10 my-10 ">
      <Table >
        <TableHeader>
          <TableRow>
            <TableHead>Title</TableHead>
            <TableHead>Category</TableHead>
            <TableHead>Amount</TableHead>
            <TableHead>Action</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {(isLoading || isError) && (
            <>
              <TableSkeleton />
              <TableSkeleton />
              <TableSkeleton />
              <TableSkeleton />
              <TableSkeleton />
              <TableSkeleton />
              <TableSkeleton />
            </>
          )}
          {data?.map((item: TAddSupplyInputs) => (
            <TableRow key={item._id}>
              <TableCell className="font-medium">{item.title}</TableCell>
              <TableCell>{item.category}</TableCell>
              <TableCell>{item.amount}</TableCell>
              <TableCell className="text-right w-[100px] lg:w-[200px] ">
                <div className="flex flex-col lg:flex-row">
                  <AllSuppliesEditModal item={item} />
                  <SuppliesDeleteModal item={item} />
                </div>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default AllSuppliesTable;
