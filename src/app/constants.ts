import TwcssConf from "@root/tailwind.config.js";

export const enum APP_ROUTES {
  MAIN = "/",
  CATEGORIES = "/categories",
  PRODUCTS = "/products",
  FAVORITES = "/favorites",
  CART = "/cart",
  UNKNOWN = "/404",
}
export const API_BASE_URL =
  import.meta.env.VITE_API_BASE_URL || "http://localhost:1452";
export const enum API_ENDPOINTS {
  CATEGORY = "/api/category",
  PRODUCT = "/api/products",
  IMAGE = "/",
}
export const PRODUCTS_CATEGORY_SORTINGS = {
  rating: "By rating",
  name: "By name",
  price: "By price",
} as const;

const { breakpoints } = TwcssConf;
export const BREAKPOINS = breakpoints;
