import { ChevronDown } from "lucide-react";

export default function ImprovementCard({ item, index }) {
  return (
    <div className="flex h-full flex-col rounded-2xl border border-slate-200 bg-white p-5">
      <div className="flex items-start gap-3">
        <span
          className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-tf-yellow/20 font-mono text-[12px] font-semibold text-tf-yellow-ink"
          aria-hidden="true"
        >
          {index + 1}
        </span>
        <h3 className="font-heading text-[1.02rem] font-semibold leading-snug text-tf-navy">{item.name}</h3>
      </div>

      <p className="mt-3 text-[14px] leading-relaxed text-slate-600">{item.whatItDoes}</p>

      <p className="mt-3 rounded-xl border border-tf-yellow/40 bg-amber-50 px-3.5 py-3 text-[14px] font-medium leading-relaxed text-tf-yellow-ink">
        {item.nudge}
      </p>

      <details className="group mt-3">
        <summary className="inline-flex cursor-pointer items-center gap-1.5 text-[13px] font-semibold text-tf-navy">
          See starting ideas
          <ChevronDown
            className="h-3.5 w-3.5 transition-transform group-open:rotate-180"
            aria-hidden="true"
          />
        </summary>
        <ul className="mt-2 space-y-1.5 text-[13.5px] leading-relaxed text-slate-600">
          {item.startingIdeas.map((idea) => (
            <li key={idea} className="flex gap-2">
              <span className="mt-[7px] h-1 w-1 shrink-0 rounded-full bg-tf-yellow-ink" aria-hidden="true" />
              <span>{idea}</span>
            </li>
          ))}
        </ul>
        <p className="mt-2 text-[12.5px] text-slate-500">
          Use these only if you are stuck — your own option is usually better.
        </p>
      </details>
    </div>
  );
}