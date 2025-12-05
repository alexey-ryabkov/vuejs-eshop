import { ref, watchEffect, type Ref } from "vue";

import { castArray, withMinDuration } from "@shared/utils";

export default function useProcessingWithMinDuration<T>(
  data: Ref,
  processingFn: (args: any) => T,
  delayMs = 300
  // delayMs = 5_000
) {
  const isLoading = ref(true);
  const result = ref<T[] | T | undefined>(undefined);

  const start = Date.now();
  watchEffect(async () => {
    const raw = data.value;
    if (!raw) return;

    isLoading.value = true;

    const resultArray = await withMinDuration(
      () => Promise.resolve(castArray(raw).map(processingFn)),
      delayMs,
      start
    );
    result.value = Array.isArray(raw) ? resultArray : resultArray.pop();

    isLoading.value = false;
  });

  return { isLoading, result };
}
