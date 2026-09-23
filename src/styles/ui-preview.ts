export const uiPreview = {
  shell: "overflow-hidden rounded-xl border border-border bg-panel-deep shadow-xl shadow-black/10",
  toolbar: "flex min-h-10 items-center justify-between border-b border-border px-4 text-[9px] font-bold tracking-widest text-subtle",
  liveDot: "inline-block h-1.5 w-1.5 rounded-full bg-accent-strong",
  canvas: "grid min-h-[315px] place-items-center bg-panel bg-[radial-gradient(var(--color-border)_0.7px,transparent_0.7px)] bg-[length:18px_18px] p-8",
  placeholder: "w-full max-w-80 rounded-xl border border-dashed border-subtle bg-sidebar/90 px-6 py-7 text-center",
  glyph: "mx-auto mb-4 flex h-12 w-12 items-center justify-center gap-1 rounded-xl border border-accent/50 bg-accent/15",
  glyphIcon: "bi bi-grid-3x3-gap text-2xl text-accent",
  description: "mx-auto mt-2 max-w-52 text-xs leading-normal text-muted",
} as const;
