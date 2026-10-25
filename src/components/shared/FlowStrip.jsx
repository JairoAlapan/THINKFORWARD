import { FLOW_STEPS } from "@/data/navigation";
import { cn } from "@/lib/utils";

export default function FlowStrip({ tone = "dark", className }) {
  const dark = tone === "dark";

  return (
    <ol
      className={cn("flex flex-wrap items-center gap-x-2 gap-y-2 text-[13px] font-medium", className)}
      aria-label="The thinking flow ThinkForward follows"
    >
      {FLOW_STEPS.map((step, index) => (
        <li key={step} className="flex items-center gap-2">
          <span
            className={cn(
              "rounded-full px-2.5 py-1",
              dark ? "bg-white/8 text-slate-200 ring-1 ring-white/10" : "bg-white text-tf-navy ring-1 ring-slate-200"
            )}
          >
            {step}
          </span>
          {index < FLOW_STEPS.length - 1 ? (
            <span className={dark ? "text-tf-teal/70" : "text-slate-400"} aria-hidden="true">
              →
            </span>
          ) : null}
        </li>
      ))}
    </ol>
  );
}