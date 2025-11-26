import { z } from "zod";

export const productsCategory = z.object({
  id: z.number(),
  name: z.string(),
});

export const categoriesListSchema = z.array(productsCategory);
