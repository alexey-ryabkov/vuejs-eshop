import processMalformedColor from "@entities/filter/utils/processMalformedColor";
import CheckboxesFilter from "./CheckboxesFilter";

export default class ColorsFilter extends CheckboxesFilter {
  constructor() {
    super("color", {});
  }

  override normalize(value: string) {
    if (value == "none") return null;
    return super.normalize(processMalformedColor(value));
  }
}
