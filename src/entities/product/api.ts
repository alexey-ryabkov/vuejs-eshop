import { API_BASE_URL, API_ENDPOINTS } from "@app/constants";
import { processApiRequest } from "@api";
import type { Product, ProductsList } from "./types";
import { productSchema, productsListSchema } from "./schemas";

export const fetchProducts = (categoryId?: number) =>
  processApiRequest<ProductsList>(
    () =>
      fetch(
        `${API_BASE_URL}${API_ENDPOINTS.PRODUCT}${
          categoryId ? `/${categoryId}` : ""
        }`
      ),
    productsListSchema
  );

export const fetchProductData = (productId: number) =>
  processApiRequest<Product>(
    () => fetch(`${API_BASE_URL}${API_ENDPOINTS.PRODUCT}/${productId}`),
    productSchema
  );
