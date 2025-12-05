import type { Ref } from "vue";
import type { ProductData } from "@types";

export type ProductDataFieldCode = Exclude<
  Extract<keyof ProductData, string>,
  "characteristics" | "id" | "images" | "image" | "createdAt"
>;
export type ProductDataCharacteristicCode =
  ProductData["characteristics"][number]["characteristic"];

export type RawFilterValue = string | number | boolean | null;

export type FilterCode = ProductDataFieldCode | ProductDataCharacteristicCode;
export interface Filter<
  FilterVariants = unknown,
  FilterVariantValue = unknown,
  FilterValue = FilterVariantValue
> {
  get code(): FilterCode;
  get variants(): FilterVariants;
  get isActive(): boolean;
  get isActual(): boolean;
  get unit(): string;
  normalize(value: RawFilterValue): FilterVariantValue | null;
  addVariant(value: FilterVariantValue): void;
  apply(product: ProductData): boolean;
  withValue(value: FilterValue): this;
  value?: FilterValue;
}
export type FilterConstructor = new (...args: any[]) => Filter;

export type FilterItem<
  FilterVariants = unknown,
  FilterVariantValue = unknown,
  FilterValue = FilterVariantValue
> = {
  name: string;
  code: FilterCode;
  filter: Filter<FilterVariants, FilterVariantValue, FilterValue>;
  weight?: number;
  ref?: Ref<FilterValue>;
};
