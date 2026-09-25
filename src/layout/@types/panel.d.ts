import type { ComponentName } from "../../components.ts";
import type { ApiDemoState } from "../../components/api/state";
import type { BoxDemoState } from "../../components/box/state";
import type { ButtonDemoState } from "../../components/button/state";
import type { InputDemoState } from "../../components/input/state";

export type PanelContentProps = {
    apiDemo: ApiDemoState;
    boxDemo: BoxDemoState;
    buttonDemo: ButtonDemoState;
    inputDemo: InputDemoState;
    selected: ComponentName;
};

export type PreviewTheme = "light" | "dark";

export type PanelPreviewPayload = PanelContentProps & {
    theme: PreviewTheme;
};

export type PanelControlsProps = PanelContentProps & {
    onApiDemoChange: (state: ApiDemoState) => void;
    onBoxDemoChange: (state: BoxDemoState) => void;
    onButtonDemoChange: (state: ButtonDemoState) => void;
    onInputDemoChange: (state: InputDemoState) => void;
};

export type PanelSidebarProps = {
    selected: ComponentName;
    onSelect: (name: ComponentName) => void;
};
