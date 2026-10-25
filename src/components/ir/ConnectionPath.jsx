import { cn } from "@/lib/utils";
import { accent as accentFor } from "@/lib/accents";
import { CONNECTION_STEPS } from "@/data/innovationReadiness";

export default function ConnectionPath() {
  return (
    <ol className="relative mt-6 space-y-3">
      <span
        className="absolute bottom-4 left-[15px] top-4 w-px bg-gradient-to-b from-tf-teal via-tf-indigo to-tf-coral"
        aria-hidden="true"
      />
      {CONNECTION_STEPS.map((step, index) => {
        const a = accentFor(step.accent);
        return (
          <li key={step.title} className="relative flex gap-4">
            <span
              className={cn(
                "relative z-10 mt-1 flex h-8 w-8 shrink-0 items-center justify-center rounded-full border-2 border-white font-mono text-[12px] font-semibold text-tf-navy",
                a.dot
              )}
              aria-hidden="true"
            >
              {index + 1}
            </span>
            <div className="flex-1 rounded-xl border border-slate-200 bg-white p-4">
              <h3 className="font-heading text-[15.5px] font-semibold text-tf-navy">{step.title}</h3>
              <p className="mt-1 text-[14.5px] leading-relaxed text-slate-600">{step.detail}</p>
            </div>
          </li>
        );
      })}
    </ol>
  );
}