import { cn } from "@/lib/utils";
import { accent as accentFor } from "@/lib/accents";

export default function ReadinessCard({ aspect }) {
  const a = accentFor(aspect.accent);

  return (
    <div className={cn("flex h-full flex-col rounded-2xl border bg-white p-5", a.border)}>
      <div className="flex items-center gap-2.5">
        <span className={cn("h-2.5 w-2.5 rounded-full", a.dot)} aria-hidden="true" />
        <h3 className="font-heading text-[1.02rem] font-semibold leading-snug text-tf-navy">{aspect.name}</h3>
      </div>

      <p className="mt-2.5 text-[14.5px] leading-relaxed text-slate-700">{aspect.definition}</p>

      <div className={cn("mt-3 rounded-xl border p-3.5", a.panel, a.border)}>
        <p className="text-[10.5px] font-semibold uppercase tracking-[0.12em] text-slate-500">Example</p>
        <p className="mt-1 text-[14px] leading-relaxed text-slate-700">{aspect.example}</p>
      </div>

      <p className="mt-3 flex-1 text-[13.5px] leading-relaxed text-slate-600">
        <span className={cn("font-semibold", a.text)}>Why it matters: </span>
        {aspect.why}
      </p>
    </div>
  );
}