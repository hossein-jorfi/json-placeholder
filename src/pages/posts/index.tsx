// hooks
import { useEffect, useMemo, useState } from "react";

// api
import useFetchData from "@/service/use-fetch-data";

// types
import { PostType } from "@/defenitions";

// components
import PostCard from "./post-card";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import PostsSkeleton from "./posts-skeleton";
import CustomPagination from "@/components/custom-pagination";

const PostsPerPage = 10;

const Posts = () => {
  const [showLikedPosts, setShowLikedPosts] = useState(false);
  const [filtredData, setFiltredData] = useState<PostType[]>([]);
  const [currentPage, setCurrentPage] = useState(1);

  const { isPending, error, data } = useFetchData<PostType[]>(["posts"]);

  useEffect(() => {
    setFiltredData(data || []);
  }, [data]);

  const filterData = () => {
    const show = !showLikedPosts;
    setCurrentPage(1)
    if (show) {
      const likedPosts = JSON?.parse(
        localStorage?.getItem("liked-post") || "[]"
      );
      setFiltredData(data?.filter((i) => likedPosts?.includes(i.id)) || []);
    } else {
      setFiltredData(data || []);
    }
    setShowLikedPosts(!showLikedPosts);

  };

  const currentTableData = useMemo(() => {
    const firstPageIndex = (currentPage - 1) * PostsPerPage;
    const lastPageIndex = firstPageIndex + PostsPerPage;
    return filtredData?.slice(firstPageIndex, lastPageIndex);
  }, [currentPage, filtredData]);

  if (error) return "An error has occurred: " + error.message;

  return (
    <div className="space-y-4">
      <div className="flex items-center space-x-2">
        <Checkbox id="terms" checked={showLikedPosts} onClick={filterData} />
        <Label htmlFor="terms">Liked Posts</Label>
      </div>
      <div className="grid gap-3 grid-cols-1 lg:grid-cols-2">
        {isPending ? (
          <PostsSkeleton />
        ) : (
          currentTableData?.map((post) => (
            <PostCard key={post.id} post={post} />
          ))
        )}
      </div>

      <CustomPagination
        currentPage={currentPage}
        totalCount={filtredData?.length || 0}
        pageSize={PostsPerPage}
        onPageChange={(page) => setCurrentPage(page)}
      />
    </div>
  );
};

export default Posts;
