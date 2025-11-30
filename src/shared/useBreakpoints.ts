import { computed, onMounted, onUnmounted, ref } from "vue";
import type { BreakpointFlags } from "@app/types";
import { BREAKPOINS } from "@app/constants";

export function useBreakpoints() {
  const width = ref(window.innerWidth);

  const onResize = () => {
    width.value = window.innerWidth;
  };

  onMounted(() => {
    window.addEventListener("resize", onResize);
  });

  onUnmounted(() => {
    window.removeEventListener("resize", onResize);
  });

  const flags = computed<BreakpointFlags>(() => {
    const w = width.value;
    return Object.fromEntries(
      Object.entries(BREAKPOINS).map(([name, bp]) => [name, w >= bp])
    ) as BreakpointFlags;
  });

  const isMobile = computed(() => width.value < BREAKPOINS.sm);

  return {
    breakpoints: flags,
    isMobile,
    width,
  };
}
