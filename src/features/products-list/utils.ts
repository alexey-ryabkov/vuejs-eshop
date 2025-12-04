import type { ProductData } from "@types";
import { getDiscountAmount, getDiscountPercent } from "@utils";

export const sortByArriving = (a: ProductData, b: ProductData) => {
  if (a === undefined || b === undefined) {
    debugger;
  }
  return b.createdAt.getTime() - a.createdAt.getTime();
};

export const sortByDiscountAmount = (a: ProductData, b: ProductData) =>
  getDiscountAmount(b) - getDiscountAmount(a);

export const sortByDiscountPercent = (a: ProductData, b: ProductData) =>
  getDiscountPercent(b) - getDiscountPercent(a);

export const shuffle = () => Math.random() - 0.5;
