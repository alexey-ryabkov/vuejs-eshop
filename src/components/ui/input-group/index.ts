import { type VariantProps, cva } from "class-variance-authority";
import { cn } from "@shared/utils";

export { default as InputGroup } from "./InputGroup.vue";
export { default as InputGroupAddon } from "./InputGroupAddon.vue";
export { default as InputGroupButton } from "./InputGroupButton.vue";
export { default as InputGroupInput } from "./InputGroupInput.vue";
export { default as InputGroupText } from "./InputGroupText.vue";

export const inputGroupAddonVariants = cva(
  cn(
    "text-muted-foreground flex h-auto cursor-text items-center justify-center gap-2 py-1.5 ",
    "select-none [&>svg:not([class*='size-'])]:size-4 [&>kbd]:rounded-[calc(var(--radius)-5px)] ",
    "group-data-[disabled=true]/input-group:opacity-50"
  ),
  {
    variants: {
      align: {
        "inline-start": "order-first has-[>kbd]:ml-[-0.35rem]",
        "inline-end": "order-last has-[>kbd]:mr-[-0.35rem]",
        "block-start":
          "order-first w-full justify-start px-3 pt-3 [.border-b]:pb-3 group-has-[>input]/input-group:pt-2.5",
        "block-end":
          "order-last w-full justify-start px-3 pb-3 [.border-t]:pt-3 group-has-[>input]/input-group:pb-2.5",
      },
    },
    defaultVariants: {
      align: "inline-start",
    },
  }
);

export type InputGroupVariants = VariantProps<typeof inputGroupAddonVariants>;
