import { cn } from "@/lib/utils";
import { accent as accentFor } from "@/lib/accents";

export default function AnswerProgress({ answered, total, accent = "sky" }) {
  const a = accentFor(accent);
  const percent = total > 0 ? Math.round((answered / total) * 100) : 0;

  return (
    <div>
      <div className="flex items-center justify-between text-[12.5px] font-medium text-slate-500">
        <span>
          {answered} of {total} answered
        </span>
        <span>{percent}%</span>
      </div>
      <div
        className="mt-1.5 h-1.5 w-full overflow-hidden rounded-full bg-slate-200"
        role="progressbar"
        aria-valuenow={answered}
        aria-valuemin={0}
        aria-valuemax={total}
        aria-label="Answers written"
      >
        <div
          className={cn("h-full rounded-full transition-all duration-300", a.dot)}
          style={{ width: `${percent}%` }}
        />
      </div>
    </div>
  );
}