import type { ComponentName } from "../../components.ts";
import type { ApiDemoState } from "../../components/api/state";
import type { BoxDemoState } from "../../components/box/state";
import type { ButtonDemoState } from "../../components/button/state";

export type PanelContentProps = {
    apiDemo: ApiDemoState;
    boxDemo: BoxDemoState;
    buttonDemo: ButtonDemoState;
    selected: ComponentName;
};

export type PanelControlsProps = PanelContentProps & {
    onApiDemoChange: (state: ApiDemoState) => void;
    onBoxDemoChange: (state: BoxDemoState) => void;
    onButtonDemoChange: (state: ButtonDemoState) => void;
};

export type PanelSidebarProps = {
    selected: ComponentName;
    onSelect: (name: ComponentName) => void;
};
