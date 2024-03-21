import { Skeleton } from "@/components/ui/skeleton";

const CommentSkeleton = () => {
  return (
    <div className="grid grid-cols-8 md:grid-cols-10 p-5 md:p-10 gap-5">
      <div className="col-span-1">
        <Skeleton className="object-cover bg-slate-800 size-14 md:size-20 rounded-full" />
      </div>
      <div className="ml-5 col-span-7 md:col-span-9">
        <h2 className="mb-1 md:mb-2">
          <Skeleton className="h-8 bg-slate-800" />
        </h2>
        <p className="">
          <Skeleton className="h-16 bg-slate-800" />
        </p>
      </div>
    </div>
  );
};

export default CommentSkeleton;
