import type { CartItemProduct } from "@types";

export type Order = {
  coupon?: string;
  bonus_card?: number;
  items: CartItemProduct[];
};
