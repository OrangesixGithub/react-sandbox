export const componentNames = [
  "Accordion", "Autocomplete", "Box", "Button", "Calendar", "Editor",
  "Input", "InputFilter", "Lightbox", "Loading", "Message", "Modal",
  "MultiSelect", "PDF", "PickList", "Radio", "Select", "Switch",
  "Table", "TablePivot", "Tabview", "Textarea", "Tooltip",
] as const;

export type ComponentName = (typeof componentNames)[number];

export function componentId(name: ComponentName) {
  return name.toLowerCase();
}
