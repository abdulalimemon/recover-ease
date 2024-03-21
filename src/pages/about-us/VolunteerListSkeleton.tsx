import { Skeleton } from "@/components/ui/skeleton";

const VolunteerListSkeleton = () => {
  return (
    <div className="flex flex-col justify-center m-8 text-center">
      <Skeleton className="self-center flex-shrink-0 size-28 md:size-36 mb-4  rounded-full " />
      <Skeleton className="h-5" />
      <Skeleton className="h-5 mt-3" />
    </div>
  );
};

export default VolunteerListSkeleton;
