import { cn } from "@/lib/utils";
import { SCENARIOS } from "@/data/scenarios";

export default function ScenarioPicker({ selectedId, onSelect }) {
  return (
    <ul className="grid gap-2.5 sm:grid-cols-2 xl:grid-cols-4">
      {SCENARIOS.map((scenario) => {
        const isSelected = scenario.id === selectedId;
        return (
          <li key={scenario.id}>
            <button
              type="button"
              onClick={() => onSelect(scenario.id)}
              aria-pressed={isSelected}
              className={cn(
                "flex h-full w-full flex-col items-start gap-1 rounded-xl border p-3.5 text-left transition-colors",
                isSelected
                  ? "border-tf-sky bg-sky-50 ring-1 ring-tf-sky/40"
                  : "border-slate-200 bg-white hover:border-slate-300 hover:bg-slate-50"
              )}
            >
              <span
                className={cn(
                  "rounded-full px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wide",
                  isSelected ? "bg-tf-navy text-tf-sky" : "bg-slate-100 text-slate-500"
                )}
              >
                {scenario.tag}
              </span>
              <span className="text-[14px] font-semibold leading-snug text-tf-navy">{scenario.title}</span>
            </button>
          </li>
        );
      })}
    </ul>
  );
}