import { z } from "zod";

export const characteristicSchema = z.object({
  characteristic: z.string(),
  unit_type: z.string(),
  value: z.string(),
});

export const productSchema = z.object({
  id: z.number(),
  createdAt: z.coerce.date(),
  price: z.number(),
  discount_price: z.number().nullable(),
  guarantee: z.number(),
  rating: z.number(),
  count_review: z.number(),
  is_available: z.boolean(),
  store_address: z.string().nullable(),
  color: z.string(),
  brand: z.string(),
  country: z.string(),
  category: z.string(),
  name: z.string(),
  images: z.array(z.string()),
  characteristics: z.array(characteristicSchema),
});

export const productsCategory = z.object({
  id: z.number(),
  name: z.string(),
});

export const productsListSchema = z.array(productSchema);

export const categoriesListSchema = z.array(productsCategory);

export const statusMessageSchema = z.object({
  message: z.string(),
});
