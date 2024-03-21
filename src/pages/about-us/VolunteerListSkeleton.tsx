import { Skeleton } from "@/components/ui/skeleton";

const VolunteerListSkeleton = () => {
  return (
    <div className="flex flex-col justify-center m-8 text-center">
      <Skeleton className="self-center flex-shrink-0 size-28 md:size-36 mb-4  rounded-full bg-slate-800" />
      <Skeleton className="h-5 bg-slate-800" />
      <Skeleton className="h-5 mt-3 bg-slate-800" />
    </div>
  );
};

export default VolunteerListSkeleton;
