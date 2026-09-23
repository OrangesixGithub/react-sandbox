import type { ComponentName } from "../../catalog/components.ts";

export type PanelContentProps = {
    selected: ComponentName;
};

export type PanelSidebarProps = {
    selected: ComponentName;
    onSelect: (name: ComponentName) => void;
};
