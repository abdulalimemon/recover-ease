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
import { useAllReliefGoodsQuery } from "@/redux/features/reliefGoods/reliefGoodsApi";

const AllReliefGoodsTable = () => {
  const { data, isLoading, isError } = useAllReliefGoodsQuery(null);
  return (
    <div className="lg:px-10 mb-10 ">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Title</TableHead>
            <TableHead>Category</TableHead>
            <TableHead>Description</TableHead>
            <TableHead>Amount</TableHead>
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
              <TableCell>
                <span className="hidden md:block">{item.description}</span>
                <span className="md:hidden">hidden for small screen.</span>
              </TableCell>
              <TableCell>{item.amount}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default AllReliefGoodsTable;
