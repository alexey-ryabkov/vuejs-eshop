import { useQuery, type QueryObserverOptions } from "@tanstack/vue-query";
import { inQueryBoundary } from "@app/utils";
import { fetchCategories } from "./api";

export function useCategories(
  opts?: Partial<
    QueryObserverOptions<Awaited<ReturnType<typeof fetchCategories>> | void>
  >
) {
  return useQuery({
    queryKey: ["categories"],
    queryFn: () => inQueryBoundary(fetchCategories),
    refetchOnWindowFocus: false,
    retry: false,
    ...opts,
  });
}
