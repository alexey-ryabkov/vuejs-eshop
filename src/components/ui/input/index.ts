import type { VariantProps } from "class-variance-authority";
import { cva } from "class-variance-authority";
import { cn } from "@shared/utils";

export { default as Input } from "./Input.vue";

export const inputVariants = cva(
  cn(
    "w-full min-w-0 rounded-lg dark:bg-input/30 flex transition-[color,box-shadow]",
    "disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50",
    "selection:bg-primary selection:text-primary-foreground",
    "focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]",
    "aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive"
  ),
  {
    variants: {
      variant: {
        default: "border border-input bg-transparent",
        accent: "bg-accent",
      },
      size: {
        default: "h-10 px-4 py-2",
        lg: "h-14 p-4",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

export type InputVariants = VariantProps<typeof inputVariants>;
