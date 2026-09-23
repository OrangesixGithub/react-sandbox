import { uiSections } from "../../styles/ui-sections";

type SectionTitleProps = {
  index: string;
  category: string;
  title: string;
  id: string;
  aside?: string;
};

export function SectionTitle({ index, category, title, id, aside }: SectionTitleProps) {
  return (
    <div className={uiSections.titleRow}>
      <div>
        <span className={uiSections.eyebrow}>{index} / {category}</span>
        <h2 className={uiSections.heading} id={id}>{title}</h2>
      </div>
      {aside && <span className="pb-0.5 text-[11px] text-muted">{aside}</span>}
    </div>
  );
}
