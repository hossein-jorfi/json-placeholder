import { Skeleton } from "@/components/ui/skeleton";

const PostsSkeleton = () => {
  return (
    <>
      {Array(10)
        .fill("")
        .map((_, index) => (
          <div
            key={index}
            className="border p-4 rounded-lg flex flex-col gap-3 justify-between"
          >
            <div className="flex justify-between h-7 gap-3">
              <Skeleton className="w-full" />
              <Skeleton className="w-7" />
            </div>
            <Skeleton className="w-full h-9" />
            <Skeleton className="w-full h-24" />
            <Skeleton className="w-20 h-9" />
          </div>
        ))}
    </>
  );
};

export default PostsSkeleton;
