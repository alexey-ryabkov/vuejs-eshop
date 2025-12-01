import type { ProductData, ProductsCategorySorting } from "@app/types";
import { getDiscountAmount, getDiscountPercent } from "@app/utils";

export const sortByArriving = (a: ProductData, b: ProductData) => {
  if (a === undefined || b === undefined) {
    debugger;
  }
  return b.createdAt.getTime() - a.createdAt.getTime();
};

export const sortByRating = (a: ProductData, b: ProductData) => {
  const ratingDiff = b.rating - a.rating;
  return !ratingDiff ? b.count_review - a.count_review : ratingDiff;
};

export const sortByPrice = (a: ProductData, b: ProductData) =>
  a.final_price - b.final_price;

export const sortByName = (a: ProductData, b: ProductData) =>
  a.full_title.localeCompare(b.full_title);

export const sortByDiscountAmount = (a: ProductData, b: ProductData) =>
  getDiscountAmount(b) - getDiscountAmount(a);

export const sortByDiscountPercent = (a: ProductData, b: ProductData) =>
  getDiscountPercent(b) - getDiscountPercent(a);

export const shuffle = () => Math.random() - 0.5;

export const noSort = (_: ProductData, __: ProductData) => 0;

export function getSortingFn(sorting: ProductsCategorySorting) {
  switch (sorting) {
    case "rating":
      return sortByRating;
    case "name":
      return sortByName;
    case "price":
      return sortByPrice;
    default:
      return noSort;
  }
}
