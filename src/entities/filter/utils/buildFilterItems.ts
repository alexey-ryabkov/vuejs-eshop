import type { ProductData } from "@types";
import type {
  FilterCode,
  FilterItem,
  ProductDataFieldCode,
} from "@entities/filter/types";
import {
  CheckboxesFilter,
  ColorsFilter,
  RangeFilter,
} from "@entities/filter/model";
import { createFilter, filterableValueFromСharacteristic } from "./helpers";

export const PREDIFINED_BRANDS = [
  "Apple",
  "Samsung",
  "Xiaomi",
  "Poco",
  "OPPO",
  "Honor",
  "Motorola",
  "Nokia",
  "Realme",
];

export default function buildFilterItems(
  products: ProductData[]
  // ): FilterItem[] {
): Record<FilterCode, FilterItem> {
  const brandFilter = new CheckboxesFilter(
    "brand",
    PREDIFINED_BRANDS.reduce((result, brand) => ({ ...result, [brand]: 0 }), {})
  );
  const colorsFilter = new ColorsFilter();
  const priceFilter = new RangeFilter("final_price");

  const filters: Record<FilterCode, FilterItem> = {
    [priceFilter.code]: {
      name: "Цена",
      code: priceFilter.code,
      filter: priceFilter,
      weight: 0,
    },
    [brandFilter.code]: {
      name: "Бренд",
      code: brandFilter.code,
      filter: brandFilter,
      weight: 10,
    },
    [colorsFilter.code]: {
      name: "Цвет",
      code: colorsFilter.code,
      filter: colorsFilter,
      weight: 20,
    },
  };

  products.forEach((product) => {
    ["final_price", "brand", "color"].forEach((code) => {
      const value = filters[code].filter.normalize(
        product[code as ProductDataFieldCode]
      );
      if (value !== null) {
        filters[code].filter.addVariant(value);
      }
    });

    product.characteristics
      .map(filterableValueFromСharacteristic)
      .forEach((filterableValue, index) => {
        const {
          filterCode: code,
          filterName: name,
          value: valueRaw,
        } = filterableValue;

        if (!(code in filters)) {
          filters[code] = {
            name,
            code,
            filter: createFilter(filterableValue),
            weight: 100 + index,
          };
        }

        const value = filters[code].filter.normalize(valueRaw);
        if (value !== null) {
          filters[code].filter.addVariant(value);
        }
      });
  });

  return Object.values(filters)
    .filter(({ filter }) => filter.isActual)
    .sort(({ weight: a }, { weight: b }) => (a ?? 0) - (b ?? 0))
    .reduce((result, item) => ({ ...result, [item.code]: item }), {});
}
