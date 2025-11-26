import type { z } from "zod";
import type { categoriesListSchema } from "./schemas";

export type CategoriesList = z.infer<typeof categoriesListSchema>;
export type Category = CategoriesList[number];
