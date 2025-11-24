import { API_BASE_URL, API_ENDPOINTS } from "@app/constants";
import type { CategoriesList, Product, ProductsList } from "@app/types";
import {
  categoriesListSchema,
  productSchema,
  productsListSchema,
} from "@app/schemas";
import { processApiRequest } from "@app/utils";

export const fetchCategories = () =>
  processApiRequest<CategoriesList>(
    () => fetch(`${API_BASE_URL}${API_ENDPOINTS.CATEGORY}`),
    categoriesListSchema
  );

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

export const getImageUrl = (path: string) =>
  `${API_BASE_URL}${API_ENDPOINTS.IMAGE}${path.replace(/^\/+/, "")}`;
