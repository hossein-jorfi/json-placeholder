import { api } from "./api";
import { useQuery } from "@tanstack/react-query";

const useFetchData = <T>(queryKey: string[]) => {
  return useQuery<T>({
    queryKey: [queryKey],
    queryFn: async () => {
      return (await api.get(queryKey.join("/"))).data;
    },
  });
};

export default useFetchData;
