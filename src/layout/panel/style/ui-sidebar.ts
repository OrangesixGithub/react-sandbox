import { tv } from "tailwind-variants/lite";

export const uiSidebar = tv({
    slots: {
        root: "flex min-w-0 flex-col border-b border-border-soft bg-sidebar tablet:sticky tablet:top-0 tablet:h-screen tablet:border-r tablet:border-b-0",
        brand: "flex h-[68px] items-center gap-2.5 border-b border-border-soft px-5",
        logo: "h-9 w-9 object-contain",
        brandName: "font-display text-[17px] font-extrabold tracking-tight text-white",
        intro: "px-5 pt-5 pb-3 tablet:pt-7",
        eyebrow: "block text-[10px] font-bold uppercase tracking-widest text-subtle",
        heading: "mt-3 flex items-center gap-2.5 font-display text-[13px] font-semibold text-copy",
        headingIcon: "bi bi-grid text-[15px] leading-none text-subtle",
        search: "mx-4 mb-4 flex h-9 items-center gap-2 rounded-lg border border-shell-border bg-panel px-3 text-subtle transition-colors focus-within:border-accent",
        searchIcon: "bi bi-search text-sm leading-none",
        input: "w-full min-w-0 border-0 bg-transparent text-xs text-copy outline-none placeholder:text-subtle",
        nav: "flex flex-1 gap-1 overflow-x-auto px-3 pb-4 tablet:flex-col tablet:overflow-y-auto [scrollbar-color:var(--color-shell-border)_transparent] [scrollbar-width:thin]",
        item: "flex min-h-10 w-auto shrink-0 cursor-pointer items-center justify-between gap-3 rounded-lg px-3 text-left text-[12px] font-medium transition-colors motion-reduce:transition-none tablet:w-full focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent",
        itemLabel: "flex items-center gap-3",
        itemIcon: "text-[15px] leading-none",
        empty: "px-3 py-2.5 text-xs text-muted",
        footer: "hidden items-center gap-3 border-t border-border-soft px-5 py-4 text-[10px] text-muted tablet:flex",
        footerIcon: "flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-panel text-base text-accent",
    },
    variants: {
        selected: {
            true: { item: "bg-accent/15 font-semibold text-accent-strong" },
            false: { item: "bg-transparent text-muted hover:bg-panel hover:text-copy" },
        },
    },
    defaultVariants: { selected: false },
});
