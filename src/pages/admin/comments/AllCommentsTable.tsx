import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { TAddSupplyInputs } from "@/pages/dashboard/create-supplies/AddSupplies";
import TableSkeleton from "@/pages/dashboard/supplies/TableSkeleton";
import { useGetSupplyQuery } from "@/redux/features/reliefGoods/supplyApi";
import { useAppSelector } from "@/redux/hooks";

const AllCommentsTable = () => {
  const { data, isLoading, isError } = useGetSupplyQuery(null);
  const userInfo = useAppSelector((state) => state.auth.user);
  return (
    <div className="lg:px-10 my-10 ">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Title</TableHead>
            <TableHead>Category</TableHead>
            <TableHead>Amount</TableHead>
            {userInfo?.role === "admin" && <TableHead>Action</TableHead>}
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
              {userInfo?.role === "admin" && (
                <TableCell className="text-right w-[100px] lg:w-[200px] ">
                  <div className="flex flex-col lg:flex-row"></div>
                </TableCell>
              )}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default AllCommentsTable;
