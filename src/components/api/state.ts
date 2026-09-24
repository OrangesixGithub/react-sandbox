export type ApiDemoState = {
    label: string;
    icon: boolean;
    required: boolean;
    disabled: boolean;
    showError: boolean;
    mode: "Controlled" | "HookForm";
};

export const initialApiDemo: ApiDemoState = {
    label: "E-mail",
    icon: true,
    required: true,
    disabled: false,
    showError: false,
    mode: "HookForm",
};
