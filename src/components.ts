export const componentNames = [
    "Box",
    "Button",
    "Input",
    "Select",
    "Radio",
    "Switch",
    "Checkbox",
    "MultiSelect"
] as const;

export type ComponentName = (typeof componentNames)[number];

export const components: Record<ComponentName, { icon: string; iframe: boolean }> = {
    Box: { icon: "bi bi-box", iframe: false, },
    Button: { icon: "bi bi-box-arrow-up-left", iframe: false, },
    Input: { icon: "bi bi-input-cursor-text", iframe: true, },
    Radio: { icon: "bi bi-record-circle", iframe: true },
    Checkbox: { icon: "bi bi-check2-square", iframe: true },
    Switch: { icon: "bi bi-toggle-on", iframe: true },
    MultiSelect: { icon: "bi bi-ui-checks", iframe: true },
    Select: { icon: "bi bi-list", iframe: true, },
};

export function componentId(name: ComponentName) {
    return name.toLowerCase();
}
