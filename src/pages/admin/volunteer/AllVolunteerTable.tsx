import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import TableSkeleton from "@/pages/dashboard/supplies/TableSkeleton";
import { TVolunteerInputs } from "@/pages/volunteer/VolunteerForm";
import { useGetVolunteerQuery } from "@/redux/features/volunteer/volunteerApi";

const AllVolunteerTable = () => {
  const { data, isError, isLoading } = useGetVolunteerQuery(null);
  return (
    <div className="lg:px-10 mb-10 mt-5">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Image</TableHead>
            <TableHead>Name</TableHead>
            <TableHead>Email</TableHead>
            <TableHead>Number</TableHead>
            <TableHead>Location</TableHead>
            <TableHead>Occupation</TableHead>
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
          {data?.map((item: TVolunteerInputs) => (
            <TableRow key={item.name}>
              <TableCell>
                <img
                  alt={item.name}
                  className="self-center flex-shrink-0 size-10 mb-4 bg-center bg-cover rounded-full "
                  src={item.image}
                />
              </TableCell>
              <TableCell>{item.name}</TableCell>
              <TableCell>{item.email}</TableCell>
              <TableCell>{item.phone}</TableCell>
              <TableCell>{item.location}</TableCell>
              <TableCell>{item.occupation}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default AllVolunteerTable;
