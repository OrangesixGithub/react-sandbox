import type { ButtonProps } from "@orangesix/react/button";

export type ButtonDemoState = {
    label: string;
    icon: string;
    color: NonNullable<ButtonProps["color"]>;
    size: NonNullable<ButtonProps["size"]> | "normal";
    iconPos: NonNullable<ButtonProps["iconPos"]>;
    disabled: boolean;
    isLoading: boolean;
    isLink: boolean;
};

export const initialButtonDemo: ButtonDemoState = {
    label: "Salvar alterações",
    icon: "save",
    color: "primary",
    size: "normal",
    iconPos: "left",
    disabled: false,
    isLoading: false,
    isLink: false,
};
