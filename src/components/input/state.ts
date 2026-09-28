export type InputDemoState = {
    mode: "Controlled" | "HookForm";
    size: "small" | "normal" | "large";
    required: boolean;
    disabled: boolean;
    readonly: boolean;
    showError: boolean;
    errorText: string;
};

export const initialInputDemo: InputDemoState = {
    mode: "Controlled",
    size: "normal",
    required: false,
    disabled: false,
    readonly: false,
    showError: false,
    errorText: "Campo inválido",
};
