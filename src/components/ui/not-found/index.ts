import { cva } from "class-variance-authority";

export { default as NotFound } from "./NotFound.vue";

export const notFoundVariants = cva("", {
  variants: {
    lined: {
      false: null,
      true: "flex-row justify-start text-left gap-0",
    },
    muted: {
      false: null,
      true: "text-secondary",
    },
  },
});
