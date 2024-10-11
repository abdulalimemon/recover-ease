import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import TableSkeleton from "@/pages/dashboard/supplies/TableSkeleton";
import { TDonationInputs } from "@/pages/detail-relief-goods/DonateNowModal";
import { useGetDonationQuery } from "@/redux/features/reliefGoods/donationApi";

const AllDonationsTable = () => {
  const { data, isError, isLoading } = useGetDonationQuery(null);
  return (
    <div className="lg:px-10 mb-10 mt-5">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Name</TableHead>
            <TableHead>Email</TableHead>
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
          {data?.map((item: TDonationInputs) => (
            <TableRow key={item._id}>
              <TableCell className="font-medium">{item.name}</TableCell>
              <TableCell>{item.email}</TableCell>
              <TableCell>{item.amount}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default AllDonationsTable;
