import { Skeleton } from "@/components/ui/skeleton";

const PostSkeleton = () => {
  return (
    <div className="flex justify-center items-center sm:mt-10 xl:mt-20">
      <div className="border-2 rounded-lg w-full md:w-2/3 p-5 space-y-3">
        <div className="flex items-center gap-3 justify-between">
          <PostUserSkeleton />
          <Skeleton className="w-10 h-10 rounded-full" />
        </div>
        <div className="w-full border" />
        <div className="space-y-3">
          <Skeleton className="w-1/2 h-10" />
          <Skeleton className="w-full h-16" />
          <Skeleton className="w-full h-16" />
        </div>
        <Skeleton className="w-24 h-4" />
        <div className="flex flex-col max-h-72 overflow-hidden">
          {Array(10)
            .fill("")
            .map((_, index) => (
              <div
                key={index}
                className={"flex flex-col border p-3 rounded-lg my-1 gap-2"}
              >
                <div className="flex gap-2 items-center">
                  <Skeleton className="w-7 h-7 rounded-full" />
                  <Skeleton className="w-32 h-5" />
                </div>
                <Skeleton className="w-full h-5" />
                <Skeleton className="w-2/3 h-5" />
              </div>
            ))}
        </div>
        {/* <PostComments
            data={commentsQuery.data}
            isLoading={commentsQuery.isPending}
          /> */}
      </div>
    </div>
  );
};

export default PostSkeleton;

export const PostUserSkeleton = () => (
  <div className="flex items-center gap-2">
    <Skeleton className="w-10 h-10 rounded-full" />
    <div className="flex flex-col gap-2">
      <Skeleton className="w-28 h-4" />
      <Skeleton className="w-40 h-4" />
    </div>
  </div>
);
