export const APP_ROUTES = {
  MAIN: "/",
  CATEGORIES: "/categories",
  PRODUCTS: "/products",
  FAVORITIES: "/favorites",
  BASKET: "/basket",
  UNKNOWN: "/404",
};
export const API_BASE_URL =
  import.meta.env.VITE_API_BASE_URL || "http://localhost:1452";
export enum API_ENDPOINTS {
  CATEGORY = "/api/category",
  PRODUCT = "/api/products",
  IMAGE = "/",
}
