import type { z } from "zod";
import type { productSchema, productsListSchema } from "./schemas";

export type Product = z.infer<typeof productSchema>;
export type ProductsList = z.infer<typeof productsListSchema>;
