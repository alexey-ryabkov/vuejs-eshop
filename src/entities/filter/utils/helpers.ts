import { type ProductСharacteristic } from "@entities/product";
import type {
  FilterCode,
  FilterConstructor,
  RawFilterValue,
} from "@entities/filter/types";
import { CheckboxesFilter, RangeFilter } from "@entities/filter/model";

type FilterableValue = {
  value: RawFilterValue;
  unit?: string;
  filterName: string;
  filterCode: FilterCode;
  filterType: FilterConstructor;
};

export const createFilter = ({
  filterType,
  filterCode,
  unit,
}: FilterableValue) => new filterType(filterCode, unit);

export const filterableValueFromСharacteristic = (
  characteristic: ProductСharacteristic
) => {
  const { characteristic: filterName, unit_type, value } = characteristic;
  return {
    filterName,
    filterType: defineFilterType(characteristic),
    filterCode: filterName,
    value,
    unit: unit_type != "значение" ? unit_type : undefined,
  } as FilterableValue;
};

const defineFilterType = ({ unit_type }: ProductСharacteristic) => {
  if (unit_type != "значение") {
    return RangeFilter;
  } else {
    return CheckboxesFilter;
  }
};
