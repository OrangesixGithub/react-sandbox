import { tv } from "tailwind-variants/lite";

export const uiSidebar = tv({
    slots: {
        root: "flex flex-col border-b border-border-soft bg-sidebar tablet:border-r tablet:border-b-0",
        intro: "px-5 pt-5 pb-2 tablet:pt-8 tablet:pb-4",
        eyebrow: "text-[10px] font-extrabold tracking-[.17em] text-accent",
        heading: "mt-2 mb-2 font-display text-[19px] tracking-[-.04em] text-white",
        description: "hidden text-xs leading-relaxed text-muted tablet:block",
        search: "mx-3.5 mt-2 mb-3 flex h-9 items-center gap-2 rounded-lg border border-border bg-canvas px-2.5 text-subtle tablet:mb-4",
        searchIcon: "bi bi-search text-[18px] leading-none",
        input: "w-full min-w-0 border-0 bg-transparent text-xs text-copy outline-none placeholder:text-subtle focus-visible:outline-2 focus-visible:outline-accent",
        nav: "flex flex-1 flex-row gap-2 overflow-x-auto px-3.5 pb-3.5 tablet:max-h-[calc(100vh-300px)] tablet:flex-col tablet:gap-1 tablet:overflow-y-auto tablet:px-2.5 tablet:pb-5 [scrollbar-color:var(--color-border)_transparent] [scrollbar-width:thin] [&::-webkit-scrollbar]:h-2 [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-track]:bg-transparent [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-thumb]:bg-border [&::-webkit-scrollbar-thumb:hover]:bg-accent",
        item: "flex min-h-9 w-auto shrink-0 cursor-pointer items-center justify-between rounded-lg border px-3 text-left text-xs transition-colors motion-reduce:transition-none tablet:w-full focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent",
        arrow: "bi bi-link hidden text-[15px] tablet:inline",
        empty: "px-3 py-2.5 text-xs text-muted",
    },
    variants: {
        selected: {
            true: { item: "border-accent bg-accent/15 font-bold text-white" },
            false: { item: "border-transparent bg-transparent text-muted hover:bg-panel hover:text-white" },
        },
    },
    defaultVariants: { selected: false },
});
