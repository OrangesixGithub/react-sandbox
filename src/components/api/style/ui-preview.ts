export const uiApiPreview = {
    card: "w-full max-w-xl overflow-hidden rounded-xl border border-border bg-panel-deep",
    head: "border-b border-border px-6 py-5",
    kicker: "font-mono text-[10px] text-accent-strong",
    title: "mt-2 block font-display text-lg font-bold text-white",
    description: "mt-1 text-xs leading-relaxed text-muted",
    field: "px-6 py-6 text-copy [&_label]:text-copy",
    input: "h-11 rounded-lg border border-border bg-canvas px-3 text-sm text-copy outline-none placeholder:text-subtle focus:border-accent focus-visible:ring-2 focus-visible:ring-accent/20 disabled:cursor-not-allowed disabled:opacity-50",
    meta: "flex flex-wrap gap-x-5 gap-y-1 border-t border-border px-6 py-3 font-mono text-[10px] text-muted",
} as const;
