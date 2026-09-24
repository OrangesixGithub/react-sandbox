export const uiHeader = {
    root: "hidden tablet:flex h-17 items-center justify-between gap-4 border-b border-border-soft bg-header px-5 tablet:px-7",
    location: "flex min-w-0 items-center gap-3",
    locationIcon: "flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-border bg-panel text-sm text-muted",
    title: "truncate font-display text-[13px] font-semibold text-copy tablet:text-sm",
    actions: "flex shrink-0 items-center gap-3",
    meta: "hidden items-center gap-2 text-[11px] text-muted desktop:flex",
    status: "h-1.5 w-1.5 shrink-0 rounded-full bg-positive",
    version: "hidden rounded-lg border border-border bg-panel px-2.5 py-1.5 font-mono text-[10px] text-muted tablet:block",
    avatar: "flex h-8 w-8 items-center justify-center rounded-full bg-accent text-[10px] font-extrabold text-white",
} as const;
