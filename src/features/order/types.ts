import type { CartItem, ProductData } from "@app/types";

export type OrderItem = ProductData & CartItem;

export type Order = {
  coupon?: string;
  bonus_card?: number;
  items: OrderItem[];
};
