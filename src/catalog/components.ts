export const componentNames = [
    "Box"
] as const;

export type ComponentName = (typeof componentNames)[number];

export function componentId(name: ComponentName) {
    return name.toLowerCase();
}
