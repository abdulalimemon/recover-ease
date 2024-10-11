import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import TableSkeleton from "@/pages/dashboard/supplies/TableSkeleton";
import { TTestimonialInputs } from "@/pages/dashboard/testimonial/AddTestimonial";
import { useGetTestimonialQuery } from "@/redux/features/testimonial/testimonialApi";

const AllTestimonialTable = () => {
  const { data, isLoading, isError } = useGetTestimonialQuery(null);
  return (
    <div className="lg:px-10 mb-10 mt-5">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Image</TableHead>
            <TableHead>Name</TableHead>
            <TableHead>Email</TableHead>
            <TableHead>Position</TableHead>
            <TableHead>Company</TableHead>
            <TableHead>Review</TableHead>
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
          {data?.map((item: TTestimonialInputs) => (
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
              <TableCell>{item.position}</TableCell>
              <TableCell>{item.company}</TableCell>
              <TableCell>{item.review}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default AllTestimonialTable;
