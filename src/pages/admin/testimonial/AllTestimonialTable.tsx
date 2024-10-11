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

const AllTestimonialTable = () => {
  const { data, isLoading, isError } = useGetSupplyQuery(null);
  return (
    <div className="lg:px-10 my-10 ">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Title</TableHead>
            <TableHead>Category</TableHead>
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
              <TableCell>{item.amount}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default AllTestimonialTable;
