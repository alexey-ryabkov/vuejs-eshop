import CheckboxesFilter from "./CheckboxesFilter";

export default class RadioButtonsFilter extends CheckboxesFilter {
  public declare value?: string;

  constructor(code: string, variants?: Record<string, number>, value?: string) {
    super(code, variants ?? {}, value);
  }
}
