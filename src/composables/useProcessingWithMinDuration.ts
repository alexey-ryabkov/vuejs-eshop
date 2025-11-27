import { ref, watchEffect, type Ref } from "vue";
import { withMinDuration } from "@shared/utils";

export default function useProcessingWithMinDuration<T>(
  data: Ref,
  processingFn: (args: any) => T,
  delayMs = 300
) {
  const isLoading = ref(true);
  const result = ref<T[] | T | undefined>(undefined);

  const start = Date.now();
  watchEffect(async () => {
    const raw = data.value;
    if (!raw) return;

    isLoading.value = true;

    const dataIsArray = Array.isArray(raw);
    const resultArray = await withMinDuration(
      () => Promise.resolve(Array.from(raw).map(processingFn)),
      delayMs,
      start
    );
    result.value = dataIsArray ? resultArray : resultArray.pop();

    isLoading.value = false;
  });

  return { isLoading, result };
}
