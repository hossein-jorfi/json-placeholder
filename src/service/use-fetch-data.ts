import { api } from "./api";
import { useQuery } from "@tanstack/react-query";

const useFetchData = (queryKey: string[]) => {
  console.log(queryKey.join("/"));
  return useQuery({
    queryKey: [queryKey],
    queryFn: async () => {
      return (await api.get(queryKey.join("/"))).data;
    },
  });
};

export default useFetchData;
