import type { ProductData } from "@types";
import type {
  Filter,
  FilterCode,
  ProductDataFieldCode,
  RawFilterValue,
} from "@entities/filter/types";

export default abstract class BaseFilter<
  FilterVariants = unknown,
  FilterVariantValue = unknown,
  FilterValue = FilterVariantValue
> implements Filter<FilterVariants, FilterVariantValue, FilterValue>
{
  constructor(
    protected _code: FilterCode,
    protected _variants: FilterVariants,
    protected _unit?: string,
    public value?: FilterValue
  ) {
    this.apply = this.apply.bind(this);
  }

  get code() {
    return this._code;
  }

  get variants() {
    return this._variants;
  }

  get unit() {
    return "";
  }

  // TODO isActive - есть значение и фильтр стоит использовать для построения списка продуктов
  // TODO сеттер для value, чтобы нормализовать то что приходит из url

  get isActive() {
    return !!this.value;
  }

  abstract get isActual(): boolean;
  abstract normalize(raw: RawFilterValue): FilterVariantValue | null;
  abstract addVariant(value: FilterVariantValue): void;
  abstract apply(product: ProductData): boolean;

  protected _getProductFieldValue(product: ProductData) {
    return (
      product.characteristics.find(
        ({ characteristic }) => characteristic == this._code
      )?.value ?? product[this._code as ProductDataFieldCode]
    );
  }
}
