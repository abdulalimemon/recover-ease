import { Skeleton } from "@/components/ui/skeleton";

const PostSkeleton = () => {
  return (
    <div className="rounded-md border">
      <Skeleton className="h-[200px] w-full rounded-t-md bg-slate-800" />
      <div className="p-4">
        <Skeleton className="h-4 w-[250px] bg-slate-800" />
        <div className="mt-4 flex justify-between items-center">
          <Skeleton className="h-4 w-[200px] mr-5 bg-slate-800" />
          <Skeleton className="h-4 w-[200px] bg-slate-800" />
        </div>
        <Skeleton className="w-full mt-4 h-10 bg-slate-800"></Skeleton>
      </div>
    </div>
  );
};

export default PostSkeleton;
