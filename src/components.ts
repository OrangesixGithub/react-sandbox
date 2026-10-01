export const componentNames = [
    "Box",
    "Button",
    "Input",
    "Select",
    "Radio",
    "Switch",
    "Checkbox",
    "MultiSelect",
    "Autocomplete",
    "Textarea",
    "Calendar",
    "InputFilter",
    "Editor"
] as const;

export type ComponentName = (typeof componentNames)[number];

export const components: Record<ComponentName, { icon: string; iframe: boolean }> = {
    Calendar: { icon: "bi bi-calendar", iframe: true },
    Autocomplete: { icon: "bi bi-search", iframe: true },
    Box: { icon: "bi bi-box", iframe: false, },
    Button: { icon: "bi bi-box-arrow-up-left", iframe: false, },
    Input: { icon: "bi bi-input-cursor-text", iframe: true, },
    Radio: { icon: "bi bi-record-circle", iframe: true },
    Checkbox: { icon: "bi bi-check2-square", iframe: true },
    Switch: { icon: "bi bi-toggle-on", iframe: true },
    MultiSelect: { icon: "bi bi-ui-checks", iframe: true },
    Select: { icon: "bi bi-list", iframe: true, },
    Editor: { icon: "bi bi-pencil-square", iframe: true },
    Textarea: { icon: "bi bi-textarea-resize", iframe: true },
    InputFilter: { icon: "bi bi-funnel", iframe: true },
};

export function componentId(name: ComponentName) {
    return name.toLowerCase();
}
