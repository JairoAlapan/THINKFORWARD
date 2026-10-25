import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";
import { accent as accentFor } from "@/lib/accents";
import { DIMENSIONS } from "@/data/computationalThinking";

export default function HeroMap() {
  return (
    <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-5 shadow-2xl shadow-black/30 backdrop-blur-sm sm:p-6">
      <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-slate-400">
        The five dimensions
      </p>
      <ol className="mt-4 space-y-2">
        {DIMENSIONS.map((dimension) => (
          <li key={dimension.id}>
            <Link
              to={`/computational-thinking#${dimension.id}`}
              className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/[0.03] px-3 py-2.5 transition-colors hover:border-white/25 hover:bg-white/[0.08]"
            >
              <span className="font-mono text-[11px] text-slate-400">0{dimension.index}</span>
              <span className={cn("h-2 w-2 shrink-0 rounded-full", accentFor(dimension.accent).dot)} aria-hidden="true" />
              <span className="text-sm font-medium text-slate-100">{dimension.name}</span>
              {dimension.focus ? (
                <span className="ml-auto rounded-full bg-tf-teal/15 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wide text-tf-teal">
                  Focus
                </span>
              ) : null}
            </Link>
          </li>
        ))}
      </ol>
      <p className="mt-4 text-xs leading-relaxed text-slate-400">
        Problem-solving gets the most space here: it was the weakest dimension among STEM senior high
        school students in the study behind ThinkForward.
      </p>
    </div>
  );
}