export const uiApiPreview = {
    card: "w-full max-w-xl overflow-hidden rounded-xl border border-slate-200 bg-slate-50 dark:border-border dark:bg-panel-deep",
    head: "border-b border-slate-200 p-3 dark:border-border",
    title: "mt-2 block font-display text-lg font-bold text-slate-900 dark:text-white",
    description: "mt-1 text-xs leading-relaxed text-slate-500 dark:text-muted",
    field: "p-4 text-slate-700 [&_label]:text-slate-700 dark:text-copy dark:[&_label]:text-copy",
    input: "h-11 rounded-lg border border-slate-300 bg-white px-3 text-sm text-slate-900 outline-none placeholder:text-slate-400 focus:border-accent focus-visible:ring-2 focus-visible:ring-accent/20 disabled:cursor-not-allowed disabled:opacity-50 dark:border-border dark:bg-canvas dark:text-copy dark:placeholder:text-subtle",
    meta: "flex flex-wrap gap-x-5 gap-y-1 border-t border-slate-200 px-6 py-3 font-mono text-[10px] text-slate-500 dark:border-border dark:text-muted",
} as const;
