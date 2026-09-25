export type InputDemoState = {
    type: "text" | "email" | "number" | "password" | "cpf";
    mode: "Controlled" | "HookForm";
    size: "small" | "normal" | "large";
    label: string;
    required: boolean;
    disabled: boolean;
    readonly: boolean;
    showError: boolean;
    errorText: string;
};

export const initialInputDemo: InputDemoState = {
    type: "text",
    mode: "Controlled",
    size: "normal",
    label: "Campo de exemplo",
    required: false,
    disabled: false,
    readonly: false,
    showError: false,
    errorText: "Campo inválido",
};
