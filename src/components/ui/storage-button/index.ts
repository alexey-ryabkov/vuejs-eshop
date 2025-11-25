import { type HTMLAttributes } from "vue";
import { cva, type VariantProps } from "class-variance-authority";

export { default } from "./StorageButton.vue";

export const storageButtonVariants = cva("", {
  variants: {
    variant: {
      text: "w-full",
      icon: "rounded-2xl",
    },
  },
  defaultVariants: {
    variant: "text",
  },
});

export type StorageButtonVariants = VariantProps<typeof storageButtonVariants>;
export type StorageButtonProps = {
  title: string;
  link: string;
  count: number;
  variant?: StorageButtonVariants["variant"];
  class?: HTMLAttributes["class"];
};
