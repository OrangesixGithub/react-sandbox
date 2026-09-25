export const componentNames = [
    "API",
    "Box",
    "Button",
    "Input"
] as const;

export type ComponentName = (typeof componentNames)[number];

export const components: Record<ComponentName, { icon: string; iframe: boolean }> = {
    API: {
        icon: "bi bi-braces",
        iframe: false,
    },
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
        iframe: false,
    },
};

export function componentId(name: ComponentName) {
    return name.toLowerCase();
}
