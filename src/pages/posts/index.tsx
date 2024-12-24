import { Button } from "@/components/ui/button";
import useFetchData from "@/service/use-fetch-data";
import { useNavigate } from "react-router";

const Posts = () => {
  const navigate = useNavigate()

  const navigateHandler = (id: number) => {
    navigate(`${id}`)
  }

  const { isPending, error, data } = useFetchData(['posts']);

  if (isPending) return "Loading...";

  if (error) return "An error has occurred: " + error.message;
  
  return (
    <div className="flex flex-col gap-3">
      {data?.map((post) => (
        <div key={post?.id} className="border p-4 rounded-lg flex flex-col gap-3">
          <p className="font-bold text-2xl">{post.title}</p>
          <p>{post.body}</p>
          <Button className="w-fit" onClick={() => navigateHandler(post?.id)}>See More</Button>
        </div>
      ))}
    </div>
  );
};

export default Posts;
