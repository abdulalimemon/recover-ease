import { Skeleton } from "@/components/ui/skeleton";
import { TableCell, TableRow } from "@/components/ui/table";

const LeaderBoardTableSkeleton = () => {
  return (
    <TableRow>
      <TableCell>
        <Skeleton className="h-8 bg-slate-800" />
      </TableCell>
      <TableCell>
        <Skeleton className="h-8 bg-slate-800" />
      </TableCell>
      <TableCell>
        <Skeleton className="h-8 bg-slate-800" />
      </TableCell>
    </TableRow>
  );
};

export default LeaderBoardTableSkeleton;
