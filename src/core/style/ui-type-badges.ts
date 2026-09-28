import { tv } from "tailwind-variants/lite";

export const uiTypeBadges = {
    list: "flex flex-wrap items-center gap-1 font-mono",
    separator: "px-0.5 text-[11px] text-subtle",
} as const;

export const uiTypeBadge = tv({
    base: "inline-flex max-w-full items-center rounded-md px-1.5 py-0.5 text-[11px] font-semibold leading-none",
    variants: {
        kind: {
            string: "bg-emerald-500/10 text-emerald-300",
            boolean: "bg-amber-500/10 text-amber-300",
            number: "bg-sky-500/10 text-sky-300",
            primitive: "bg-sky-500/10 text-sky-300",
            reference: "bg-sky-500/10 text-sky-300",
        },
    },
    defaultVariants: { kind: "reference" },
});
