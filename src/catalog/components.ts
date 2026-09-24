export const componentNames = [
    "API"
] as const;

export type ComponentName = (typeof componentNames)[number];

export const componentIcons: Record<ComponentName, string> = {
    API: "bi bi-braces",
};

export function componentId(name: ComponentName) {
    return name.toLowerCase();
}
