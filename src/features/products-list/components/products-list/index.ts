import type { VariantProps } from "class-variance-authority";
import { cva } from "class-variance-authority";

export { default as ProductsList } from "./ProductsList.vue";

export const productListVariants = cva("grid grid-cols-2 gap-4", {
  variants: {
    variant: {
      default: "md:grid-cols-3 lg:grid-cols-4",
      category: "lg:grid-cols-3 sm:gap-y-6 mb-10",
    },
  },
  defaultVariants: {
    variant: "default",
  },
});

export type ProductListVariants = VariantProps<typeof productListVariants>;
