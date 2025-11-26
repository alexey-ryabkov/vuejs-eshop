import { z } from "zod";
import { processMalformedDate } from "./utils";

export const characteristicSchema = z.object({
  characteristic: z.string(),
  unit_type: z.string(),
  value: z.string(),
});

export const productSchema = z.object({
  id: z.number(),
  // handle wrong date format in server data
  createdAt: z.preprocess((rawVal) => {
    if (rawVal instanceof Date) return rawVal;
    if (typeof rawVal !== "string") return rawVal;

    const val = rawVal.trim();
    const date = new Date(val);
    if (!Number.isNaN(date.getTime())) return date;

    return processMalformedDate(val);
  }, z.date()),
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

export const productsListSchema = z.array(productSchema);
