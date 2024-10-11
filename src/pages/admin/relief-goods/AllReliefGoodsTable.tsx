import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import TableSkeleton from "@/pages/dashboard/supplies/TableSkeleton";
import { TReliefGoodsType } from "@/pages/home/ReliefGoodsPosts";
import { useAllReliefGoodsQuery } from "@/redux/features/reliefGoods/reliefGoodsApi";

const AllReliefGoodsTable = () => {
  const { data, isLoading, isError } = useAllReliefGoodsQuery(null);
  return (
    <div className="lg:px-10 mb-10 mt-5">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Image</TableHead>
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
          {data?.map((item: TReliefGoodsType) => (
            <TableRow key={item._id}>
              <TableCell>
                <img
                  alt={item.title}
                  className="self-center flex-shrink-0 size-10 mb-4 bg-center bg-cover rounded-full "
                  src={item.image}
                />
              </TableCell>
              <TableCell className="font-medium">{item.title}</TableCell>
              <TableCell>{item.category}</TableCell>
              <TableCell className="lg:w-[600px]">
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
