import { computed, onMounted, onUnmounted, ref } from "vue";
import TwcssConf from "@root/tailwind.config.js";

const { breakpoints } = TwcssConf;
type BreakpointFlags = Record<keyof typeof breakpoints, boolean>;

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
      Object.entries(breakpoints).map(([name, bp]) => [name, w >= bp])
    ) as BreakpointFlags;
  });

  const isMobile = computed(() => width.value < breakpoints.sm);

  return {
    breakpoints: flags,
    isMobile,
    width,
  };
}
