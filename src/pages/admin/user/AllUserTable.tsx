import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import TableSkeleton from "@/pages/dashboard/supplies/TableSkeleton";
import { useGetUserQuery } from "@/redux/features/user/userApi";
import { TUser } from "@/type";

const AllUserTable = () => {
  const { data, isLoading, isError } = useGetUserQuery(null);

  return (
    <div className="lg:px-10 mb-10 mt-5">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Name</TableHead>
            <TableHead>Email</TableHead>
            <TableHead>Role</TableHead>
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
          {data?.map((item: TUser) => (
            <TableRow key={item.name}>
              <TableCell className="font-medium">{item.name}</TableCell>
              <TableCell>{item.email}</TableCell>
              <TableCell>{item.role}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default AllUserTable;
