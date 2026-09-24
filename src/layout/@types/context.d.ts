import type { ComponentName } from "../../components.ts";

export type ContextSelectionProps = {
    selected: ComponentName;
};

export type ContextTitleProps = {
    index: string;
    category: string;
    title: string;
    id: string;
    aside?: string;
};
