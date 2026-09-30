export const uiPreview = {
    grid: "grid auto-rows-fr grid-cols-[repeat(auto-fit,minmax(min(100%,340px),1fr))] gap-4",
    shell: "flex flex-col overflow-hidden rounded-2xl border border-shell-border bg-panel",
    frameShell: "flex flex-col overflow-hidden rounded-2xl border border-shell-border bg-panel",
    toolbar: "flex min-h-11 shrink-0 items-center justify-between border-b border-shell-border px-5 text-[10px] font-semibold text-muted",
    liveDot: "inline-block h-1.5 w-1.5 rounded-full bg-accent",
    canvas: "grid flex-1 place-items-center p-6",
    frameCanvas: "grid min-h-screen place-items-center p-6",
    iframe: "block h-0 min-h-0 w-full flex-1 bg-preview",
    placeholder: "w-full max-w-80 rounded-xl border border-dashed border-subtle bg-sidebar/90 px-6 py-7 text-center",
    glyph: "mx-auto mb-4 flex h-12 w-12 items-center justify-center gap-1 rounded-xl border border-accent/50 bg-accent/15",
    glyphIcon: "bi bi-grid-3x3-gap text-2xl text-accent",
    description: "mx-auto mt-2 max-w-52 text-xs leading-normal text-muted",
} as const;
