import type { z } from "zod";
import type {
  characteristicSchema,
  productSchema,
  productsListSchema,
} from "./schemas";

export type Product = z.infer<typeof productSchema>;
export type ProductsList = z.infer<typeof productsListSchema>;

export type ProductСharacteristic = z.infer<typeof characteristicSchema>;
