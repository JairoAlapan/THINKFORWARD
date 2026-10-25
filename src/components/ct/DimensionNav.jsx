import { cn } from "@/lib/utils";
import { CT_SECTIONS } from "@/data/computationalThinking";
import useScrollSpy from "@/hooks/useScrollSpy";

const SECTION_IDS = CT_SECTIONS.map((section) => section.id);

export default function DimensionNav() {
  const activeId = useScrollSpy(SECTION_IDS);

  return (
    <nav
      aria-label="Jump to a dimension"
      className="sticky top-16 z-40 border-b border-slate-200 bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/85 lg:top-[68px]"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <ul className="no-scrollbar flex items-center gap-1.5 overflow-x-auto py-2.5">
          {CT_SECTIONS.map((section) => {
            const isActive = activeId === section.id;
            return (
              <li key={section.id} className="shrink-0">
                <a
                  href={`#${section.id}`}
                  aria-current={isActive ? "location" : undefined}
                  className={cn(
                    "inline-flex items-center gap-1.5 rounded-full border px-3 py-1.5 text-[13px] font-medium transition-colors",
                    isActive
                      ? "border-tf-teal/60 bg-tf-teal/12 text-tf-teal-ink"
                      : "border-transparent text-slate-600 hover:border-slate-200 hover:bg-slate-50 hover:text-tf-navy"
                  )}
                >
                  <span className="font-mono text-[10px] text-slate-400">{section.index}</span>
                  {section.label}
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
}