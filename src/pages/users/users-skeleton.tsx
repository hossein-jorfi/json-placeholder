import { Skeleton } from "@/components/ui/skeleton";

const UsersSkeleton = () => {
  return (
    <div className="border p-4 rounded-lg flex flex-col gap-3 justify-between">
      <div className="flex items-center gap-2">
        <Skeleton className="rounded-full w-10 h-10" />
        <div className="flex flex-col gap-1">
          <Skeleton className="w-32 h-4" />
          <Skeleton className="w-20 h-4" />
        </div>
      </div>

      <div className="text-sm font-semibold mt-1 text-foreground/80 flex flex-col gap-2">
        {Array(4)
          .fill("")
          .map((_, index) => (
            <div className="flex gap-2 items-center" key={index}>
              <Skeleton className="w-5 h-5 rounded-full" />
              <Skeleton className="w-32 h-4" />
            </div>
          ))}
      </div>

      <Skeleton className="w-full h-7" />
      {/* <Button variant="secondary" onClick={navigateHandler}>
        Detail
      </Button> */}
    </div>
  );
};

export default UsersSkeleton;
