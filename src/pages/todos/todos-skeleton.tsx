import { Skeleton } from "@/components/ui/skeleton";

const TodosSkeleton = () => {
  return (
    <>
      {Array(15)
        .fill("")
        .map((_, index) => (
          <div
            key={index}
            className="border-2 p-3 rounded-lg min-h-44 flex flex-col justify-between"
          >
            <div className="flex justify-between">
              <Skeleton className="w-10 h-6" />
              <Skeleton className="w-6 h-6" />
            </div>
            <Skeleton className="w-30 h-9" />

            <div className="flex items-center gap-2">
              <Skeleton className="w-8 h-8 rounded-full" />
              <div className="flex flex-col gap-2">
                <Skeleton className="w-28 h-3" />
                <Skeleton className="w-40 h-3" />
              </div>
            </div>
          </div>
        ))}
    </>
  );
};

export default TodosSkeleton;
