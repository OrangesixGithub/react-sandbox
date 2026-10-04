export const componentNames = [
    "Accordion",
    "Box",
    "Button",
    "Input",
    "Lightbox",
    "Loading",
    "Message",
    "Modal",
    "PDF",
    "PickList",
    "Select",
    "Radio",
    "Switch",
    "Checkbox",
    "MultiSelect",
    "Autocomplete",
    "Textarea",
    "Calendar",
    "InputFilter",
    "Editor",
    "TabView",
    "Table",
    "Tooltip"
] as const;

export type ComponentName = (typeof componentNames)[number];

export const components: Record<ComponentName, { icon: string; iframe: boolean }> = {
    Accordion: { icon: "bi bi-chevron-bar-expand", iframe: true },
    Calendar: { icon: "bi bi-calendar", iframe: true },
    Autocomplete: { icon: "bi bi-search", iframe: true },
    Box: { icon: "bi bi-box", iframe: false, },
    Button: { icon: "bi bi-box-arrow-up-left", iframe: false, },
    Input: { icon: "bi bi-input-cursor-text", iframe: true, },
    Message: { icon: "bi bi-chat-square-text", iframe: true },
    Modal: { icon: "bi bi-window", iframe: true },
    PDF: { icon: "bi bi-file-earmark-pdf", iframe: true },
    Lightbox: { icon: "bi bi-images", iframe: true },
    Loading: { icon: "bi bi-arrow-repeat", iframe: true },
    PickList: { icon: "bi bi-arrow-left-right", iframe: true },
    Radio: { icon: "bi bi-record-circle", iframe: true },
    Checkbox: { icon: "bi bi-check2-square", iframe: true },
    Switch: { icon: "bi bi-toggle-on", iframe: true },
    MultiSelect: { icon: "bi bi-ui-checks", iframe: true },
    Select: { icon: "bi bi-list", iframe: true, },
    Editor: { icon: "bi bi-pencil-square", iframe: true },
    Textarea: { icon: "bi bi-textarea-resize", iframe: true },
    InputFilter: { icon: "bi bi-funnel", iframe: true },
    Tooltip: { icon: "bi bi-chat-square", iframe: true },
    Table: { icon: "bi bi-table", iframe: false },
    TabView: { icon: "bi bi-segmented-nav", iframe: true },
};

export function componentId(name: ComponentName) {
    return name.toLowerCase();
}
