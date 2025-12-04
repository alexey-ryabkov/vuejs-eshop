import type { ProductData } from "@types";
import { castArray } from "@utils";
import type { RawFilterValue } from "@entities/filter/types";
import BaseFilter from "./BaseFilter";

export default class CheckboxesFilter extends BaseFilter<
  Record<string, number>,
  { value: string; count: number },
  string[] | string
> {
  constructor(
    code: string,
    variants?: Record<string, number>,
    value?: string[] | string
  ) {
    super(code, variants ?? {}, undefined, value);
  }

  override get isActive() {
    return !!this.value && this.value.length > 0;
  }

  get isActual() {
    return Object.values(this._variants).length > 0;
  }

  normalize(value: RawFilterValue): { value: string; count: number } | null {
    return { value: String(value).trim(), count: 1 };
  }

  addVariant({ value, count }: { value: string; count: number }) {
    if (!(value in this._variants)) {
      this._variants[value] = 0;
    }
    this._variants[value] += count;
  }

  apply(product: ProductData) {
    const { value } = this.normalize(this._getProductFieldValue(product))!;
    return (
      this.value === undefined ||
      value === null ||
      castArray(this.value)
        .map((v) => v.toLowerCase())
        .includes(value.toLowerCase())
    );
  }
}
