import Container from "@/components/layout/Container";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { useGetDonationQuery } from "@/redux/features/reliefGoods/donationApi";
import { TDonationInputs } from "../detail-relief-goods/DonateNowModal";
import LeaderBoardTableSkeleton from "./LeaderBoardTableSkeleton";

const LeaderBoardTable = () => {
  const { data, isError, isLoading } = useGetDonationQuery(null);

  const newData = data?.map((item: TDonationInputs) => ({
    _id: item._id,
    name: item.name,
    email: item.email,
    amount: String(parseInt(item.amount)),
  }));

  const newArray = newData?.sort(
    (a: TDonationInputs, b: TDonationInputs) =>
      parseInt(b.amount) - parseInt(a.amount)
  );

  return (
    <section className="my-16">
      <Container>
        <div className="lg:px-10 my-10">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead></TableHead>
                <TableHead>Name</TableHead>
                <TableHead>Amount</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {(isLoading || isError) && (
                <>
                  <LeaderBoardTableSkeleton />
                  <LeaderBoardTableSkeleton />
                  <LeaderBoardTableSkeleton />
                  <LeaderBoardTableSkeleton />
                  <LeaderBoardTableSkeleton />
                  <LeaderBoardTableSkeleton />
                  <LeaderBoardTableSkeleton />
                  <LeaderBoardTableSkeleton />
                  <LeaderBoardTableSkeleton />
                  <LeaderBoardTableSkeleton />
                </>
              )}
              {newArray?.map((item: TDonationInputs, index: number) => (
                <TableRow key={item._id}>
                  <TableCell>{index + 1}</TableCell>
                  <TableCell>{item.name}</TableCell>
                  <TableCell>{item.amount}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </Container>
    </section>
  );
};

export default LeaderBoardTable;
