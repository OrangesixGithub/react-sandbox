import type { ApiDemoState } from "../../components/api/state";
import type { BoxDemoState } from "../../components/box/state";
import type { ComponentName } from "../../components.ts";

export type PanelContentProps = {
    apiDemo: ApiDemoState;
    boxDemo: BoxDemoState;
    selected: ComponentName;
};

export type PanelControlsProps = PanelContentProps & {
    onApiDemoChange: (state: ApiDemoState) => void;
    onBoxDemoChange: (state: BoxDemoState) => void;
};

export type PanelSidebarProps = {
    selected: ComponentName;
    onSelect: (name: ComponentName) => void;
};
