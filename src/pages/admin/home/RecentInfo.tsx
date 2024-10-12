import { useGetUserQuery } from "@/redux/features/user/userApi";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import TableSkeleton from "@/pages/dashboard/supplies/TableSkeleton";
import { TContactInputs, TUser } from "@/type";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { useGetMessageQuery } from "@/redux/features/contactUS/contactUsApi";

const UserListTable = () => {
  const { data: userList, isLoading, isError } = useGetUserQuery(null);
  const { data: messages } = useGetMessageQuery(null);
  return (
    <section className="h-auto">
      <div className="my-5 grid grid-cols-1 lg:grid-cols-2 gap-5 h-auto">
        <div className="border rounded-md p-5">
          <div className="flex justify-between">
            <h2 className="text-xl font-semibold">New User List</h2>
            <Link
              to="/admin/user"
              className="font-semibold flex items-center underline hover:text-blue-500"
            >
              Details <ArrowRight className="size-5 ml-2" />
            </Link>
          </div>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Name</TableHead>
                <TableHead>Email</TableHead>
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
              {[...(userList ?? [])]
                ?.filter((item) => item.role === "user")
                ?.reverse()
                ?.slice(0, 6)
                ?.map((item: TUser) => (
                  <TableRow key={item.name}>
                    <TableCell className="font-medium">{item.name}</TableCell>
                    <TableCell>{item.email}</TableCell>
                  </TableRow>
                ))}
            </TableBody>
          </Table>
        </div>

        <div className="border rounded-md p-5">
          <div className="flex justify-between">
            <h2 className="text-xl font-semibold">New Messages</h2>
            <Link
              to="/admin/messages"
              className="font-semibold flex items-center underline hover:text-blue-500"
            >
              Details <ArrowRight className="size-5 ml-2" />
            </Link>
          </div>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Name</TableHead>
                <TableHead>Messages</TableHead>
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
              {[...(messages ?? [])]
                ?.reverse()
                ?.slice(0, 6)
                ?.map((item: TContactInputs) => (
                  <TableRow key={item.name}>
                    <TableCell className="font-medium">
                      {item.name}
                    </TableCell>
                    <TableCell className="lg:w-[400px]">
                      {item.message}
                    </TableCell>
                  </TableRow>
                ))}
            </TableBody>
          </Table>
        </div>
      </div>
    </section>
  );
};

export default UserListTable;
