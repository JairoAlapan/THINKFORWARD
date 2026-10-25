import { cn } from "@/lib/utils";
import { Textarea } from "@/components/ui/textarea";

export default function WritingField({
  id,
  label,
  hint,
  prompt,
  value,
  onChange,
  rows = 4,
  required = false,
  error,
  accentText = "text-tf-coral-ink",
}) {
  const describedBy =
    [hint ? `${id}-hint` : null, error ? `${id}-error` : null].filter(Boolean).join(" ") || undefined;

  const words = value.trim() ? value.trim().split(/\s+/).length : 0;

  return (
    <div>
      <div className="flex items-baseline justify-between gap-3">
        <label htmlFor={id} className="text-[15px] font-semibold leading-snug text-tf-navy">
          {label}
          {required ? (
            <span className={cn("ml-1", accentText)} aria-hidden="true">
              *
            </span>
          ) : null}
        </label>
        {words > 0 ? <span className="shrink-0 text-[11.5px] text-slate-400">{words} words</span> : null}
      </div>

      {hint ? (
        <p id={`${id}-hint`} className="mt-1 text-[13px] leading-relaxed text-slate-500">
          {hint}
        </p>
      ) : null}

      <Textarea
        id={id}
        value={value}
        rows={rows}
        onChange={(event) => onChange(event.target.value)}
        aria-describedby={describedBy}
        aria-invalid={error ? true : undefined}
        className={cn(
          "mt-2 min-h-0 resize-y bg-white text-[15px] leading-relaxed text-slate-800 placeholder:text-slate-400",
          error && "border-tf-coral focus-visible:border-tf-coral"
        )}
      />

      {prompt ? (
        <details className="mt-1.5">
          <summary className="cursor-pointer text-[12.5px] font-medium text-slate-500 transition-colors hover:text-tf-navy">
            Need a nudge?
          </summary>
          <p className="mt-1 rounded-lg bg-slate-50 px-3 py-2 text-[13px] leading-relaxed text-slate-600">
            {prompt}
          </p>
        </details>
      ) : null}

      {error ? (
        <p id={`${id}-error`} className="mt-1.5 text-[13px] font-medium text-tf-coral-ink">
          {error}
        </p>
      ) : null}
    </div>
  );
}