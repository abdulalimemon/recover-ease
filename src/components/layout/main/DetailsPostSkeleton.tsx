import { Skeleton } from "@/components/ui/skeleton";

const DetailsPostSkeleton = () => {
  return (
    <div className="p-0 lg:p-5 mx-auto">
      <div className="flex flex-col max-w-3xl mx-auto overflow-hidden rounded">
        <Skeleton className="w-full h-60 sm:h-96 rounded-md bg-slate-800" />
        <div className="p-6 pb-12 m-4 mx-auto space-y-6 lg:max-w-2xl sm:px-10 sm:mx-12 lg:rounded-md bg-slate-200 dark:bg-black w-full">
          <div className="space-y-2 w-full">
            <Skeleton className="inline-block h-5 bg-slate-800 w-full" />
            <Skeleton className="h-5 bg-slate-800 w-full" />
          </div>
          <div className="space-y-5 w-full">
            <Skeleton className="h-5 w-full bg-slate-800" />
            <Skeleton className="h-5 w-full bg-slate-800" />
            <Skeleton className="h-5 w-full bg-slate-800" />
            <Skeleton className="h-5 w-full bg-slate-800" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailsPostSkeleton;
