export const componentNames = [
    "Box",
    "Button",
    "Input"
] as const;

export type ComponentName = (typeof componentNames)[number];

export const components: Record<ComponentName, { icon: string; iframe: boolean }> = {
    Box: {
        icon: "bi bi-box",
        iframe: false,
    },
    Button: {
        icon: "bi bi-box-arrow-up-left",
        iframe: false,
    },
    Input: {
        icon: "bi bi-input-cursor-text",
        iframe: true,
    },
};

export function componentId(name: ComponentName) {
    return name.toLowerCase();
}
