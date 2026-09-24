import type { BoxProps } from "@orangesix/react/box";

export type BoxDemoState = {
    element: "div" | "section" | "article";
    direction: NonNullable<BoxProps["direction"]>;
    align: "items-start" | "items-center" | "items-end";
    justify: "justify-start" | "justify-center" | "justify-between";
};

export const initialBoxDemo: BoxDemoState = {
    element: "section",
    direction: "row",
    align: "items-center",
    justify: "justify-between",
};
