import { tv } from "tailwind-variants/lite";

export const uiControls = {
    root: "border-t border-border-soft bg-header desktop:min-h-[calc(100vh-68px)] desktop:border-t-0 desktop:border-l",
    inner: "px-5 py-7 tablet:px-7 desktop:sticky desktop:top-0 desktop:px-5 desktop:py-8",
    eyebrow: "text-[10px] font-bold uppercase tracking-widest text-subtle",
    heading: "mt-2 mb-2 font-display text-[17px] font-bold text-copy",
    skeletonGrid: "mt-8 grid grid-cols-2 gap-4 tablet:grid-cols-4 desktop:grid-cols-1",
    skeletonBar: "block h-2 w-1/2 rounded bg-border",
    note: "mt-9 flex gap-2.5 rounded-lg border border-border bg-panel p-4",
    noteIcon: "bi bi-lightbulb text-base text-accent",
} as const;

export const uiControlField = tv({
    base: "block border border-border bg-panel",
    variants: {
        type: {
            input: "h-9 rounded-lg",
            switch: "h-6 w-11 rounded-full",
        },
    },
    defaultVariants: { type: "input" },
});
