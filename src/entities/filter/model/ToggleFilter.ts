import type { ProductData } from "@types";
import type { RawFilterValue } from "@entities/filter/types";
import BaseFilter from "./BaseFilter";

export default class ToggleFilter extends BaseFilter<Set<boolean>, boolean> {
  constructor(code: string, unit?: string, value?: boolean) {
    super(code, new Set<boolean>(), unit, value);
  }

  get isActual() {
    return this._variants.size == 2;
  }

  normalize(value: RawFilterValue) {
    return !!value;
  }

  addVariant(value: boolean) {
    this._variants.add(value);
  }

  apply(product: ProductData) {
    return (
      this.value === undefined ||
      this.value === this._getProductFieldValue(product)
    );
  }
}
