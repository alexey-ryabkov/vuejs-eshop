import { API_BASE_URL, API_ENDPOINTS } from "@app/constants";
import { processApiRequest } from "@api";
import type { CategoriesList } from "./types";
import { categoriesListSchema } from "./schemas";

export const fetchCategories = () =>
  processApiRequest<CategoriesList>(
    () => fetch(`${API_BASE_URL}${API_ENDPOINTS.CATEGORY}`),
    categoriesListSchema
  );
