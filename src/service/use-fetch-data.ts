import { api } from "./api";
import { useQuery } from "@tanstack/react-query";

const useFetchData = <T>(queryKey: string[], enabled = true) => {
  return useQuery<T>({
    queryKey: [queryKey],
    queryFn: async () => {
      // await new Promise((resolveOuter) => {
      //   resolveOuter(
      //     new Promise((resolveInner) => {
      //       setTimeout(resolveInner, 3000);
      //     })
      //   );
      // });
      return (await api.get(queryKey.join("/"))).data;
    },
    enabled: enabled,
  });
};

export default useFetchData;
