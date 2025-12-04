import type { ProductData } from "@types";
import { toNumber } from "@utils";
import type { RawFilterValue } from "@entities/filter/types";
import BaseFilter from "./BaseFilter";

export default class RangeFilter extends BaseFilter<
  [number, number],
  number,
  [number, number]
> {
  constructor(
    code: string,
    unit?: string,
    variants?: [number, number],
    value?: [number, number]
  ) {
    super(code, variants ?? [NaN, NaN], unit, value);
  }

  get unit() {
    return this._unit ?? "";
  }

  override get isActive() {
    return !!this.value && !isNaN(this.value[0]) && !isNaN(this.value[1]);
  }

  get isActual() {
    return (
      !isNaN(this._variants[0]) &&
      !isNaN(this._variants[1]) &&
      this._variants[0] < this._variants[1]
    );
  }

  normalize(value: RawFilterValue) {
    return toNumber(value);
  }

  addVariant(value: number) {
    if (isNaN(this._variants[0]) && isNaN(this._variants[1])) {
      this._variants = [value, value];
    } else {
      const index =
        isNaN(this._variants[0]) || value < this._variants[0]
          ? 0
          : isNaN(this._variants[1]) || value > this._variants[1]
          ? 1
          : undefined;
      if (index !== undefined) {
        this._variants[index] = value;
      }
    }
  }

  apply(product: ProductData) {
    if (!this.value) return true;
    const [from, to] = this.value;
    const value = this.normalize(this._getProductFieldValue(product));
    return value === null || (from < value && to > value);
  }
}
