import type { CartItemProduct } from "@app/types";

export type Order = {
  coupon?: string;
  bonus_card?: number;
  items: CartItemProduct[];
};
