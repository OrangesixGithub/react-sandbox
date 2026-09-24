import type { ApiDemoState } from "../../components/api/state";
import type { ComponentName } from "../../catalog/components.ts";

export type PanelContentProps = {
    apiDemo: ApiDemoState;
    selected: ComponentName;
};

export type PanelControlsProps = PanelContentProps & {
    onApiDemoChange: (state: ApiDemoState) => void;
};

export type PanelSidebarProps = {
    selected: ComponentName;
    onSelect: (name: ComponentName) => void;
};
