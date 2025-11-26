import type { Product } from "@entities/product";

export type CartItem = Product & {
  quantity: number;
};
export type Order = {
  coupon?: string;
  bonus_card?: number;
  items: CartItem[];
};
