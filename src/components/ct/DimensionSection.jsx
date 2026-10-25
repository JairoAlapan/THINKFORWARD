import { Lightbulb, Target } from "lucide-react";
import { cn } from "@/lib/utils";
import { accent as accentFor } from "@/lib/accents";
import ExamplePanel from "./ExamplePanel";

export default function DimensionSection({ dimension }) {
  const a = accentFor(dimension.accent);
  const focus = Boolean(dimension.focus);

  return (
    <section id={dimension.id} className="scroll-mt-14">
      <div
        className={cn(
          "overflow-hidden rounded-3xl border bg-white",
          focus
            ? "border-tf-teal/60 shadow-[0_30px_70px_-50px_rgba(13,148,136,0.85)]"
            : "border-slate-200 shadow-sm shadow-slate-900/[0.03]"
        )}
      >
        <div className={cn("h-1.5 w-full", a.dot)} aria-hidden="true" />

        <div className="p-5 sm:p-7">
          <div className="flex flex-wrap items-center gap-x-3 gap-y-2">
            <span
              className={cn(
                "inline-flex h-9 items-center gap-2 rounded-full px-3 font-mono text-[12px] font-semibold",
                a.chip
              )}
            >
              Dimension {dimension.index}
            </span>
            {focus ? (
              <span className="rounded-full bg-tf-navy px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wide text-tf-teal">
                Research focus
              </span>
            ) : null}
          </div>

          <h2 className="mt-3 font-heading text-[1.45rem] font-semibold leading-tight text-tf-navy sm:text-[1.65rem]">
            {dimension.name}
          </h2>
          <p className={cn("mt-1 text-[15px] font-medium", a.text)}>{dimension.tagline}</p>

          <p className="mt-3 text-[15.5px] leading-relaxed text-slate-700">{dimension.definition}</p>

          {dimension.researchNote ? (
            <div className="mt-4 rounded-xl border border-tf-teal/40 bg-tf-mint/60 px-4 py-3 text-[14px] leading-relaxed text-teal-900">
              <span className="font-semibold">Why this dimension is emphasised: </span>
              {dimension.researchNote}
            </div>
          ) : null}

          <div className="mt-5">
            <ExamplePanel example={dimension.example} accent={dimension.accent} />
          </div>

          <div className="mt-5 grid gap-3 sm:grid-cols-2">
            <div className="rounded-xl border border-slate-200 bg-tf-soft p-4">
              <p className="flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.12em] text-slate-500">
                <Target className="h-3.5 w-3.5" aria-hidden="true" />
                In school and daily life
              </p>
              <p className="mt-2 text-[14.5px] leading-relaxed text-slate-700">{dimension.inSchool}</p>
            </div>
            <div className="rounded-xl border border-slate-200 bg-tf-soft p-4">
              <p className="flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.12em] text-slate-500">
                <Lightbulb className="h-3.5 w-3.5" aria-hidden="true" />
                How it helps you approach problems
              </p>
              <p className="mt-2 text-[14.5px] leading-relaxed text-slate-700">{dimension.howItHelps}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}