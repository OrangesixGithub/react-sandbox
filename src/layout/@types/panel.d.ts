import type { ComponentName } from "../../components.ts";

export type PanelContentProps = {
    selected: ComponentName;
};

export type PreviewTheme = "light" | "dark";

export type PanelPreviewPayload = PanelContentProps & {
    theme: PreviewTheme;
};

export type PanelSidebarProps = {
    selected: ComponentName;
    onSelect: (name: ComponentName) => void;
};
