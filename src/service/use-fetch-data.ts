import { api } from "./api";
import { useQuery } from "@tanstack/react-query";

const useFetchData = <T>(queryKey: string[], enabled = true) => {
  return useQuery<T>({
    queryKey: [queryKey],
    queryFn: async () => {
      return (await api.get(queryKey.join("/"))).data;
    },
    enabled: enabled,
  });
};

export default useFetchData;
