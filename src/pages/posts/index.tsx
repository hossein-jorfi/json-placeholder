import { Button } from "@/components/ui/button";
import { useQuery } from "@tanstack/react-query";

const Posts = () => {
  const { isPending, error, data } = useQuery({
    queryKey: ["repoData"],
    queryFn: async () => {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/posts"
      );
      return await response.json();
    },
  });

  if (isPending) return "Loading...";

  if (error) return "An error has occurred: " + error.message;

  console.log(data);
  return (
    <div className="flex flex-col gap-3">
      {data?.map((post) => (
        <div className="border p-4 rounded flex flex-col gap-3">
          <p className="font-bold text-2xl">{post.title}</p>
          <p>{post.body}</p>
          <Button className="w-fit">See More</Button>
        </div>
      ))}
    </div>
  );
};

export default Posts;
