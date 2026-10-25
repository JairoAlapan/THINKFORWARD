const ROWS = [
  { key: "problem", label: "Problem" },
  { key: "change", label: "What changed" },
  { key: "whyItWorked", label: "Why it worked" },
  { key: "tradeoff", label: "Trade-off" },
  { key: "notice", label: "What to notice" },
];

export default function CaseStudyCard({ study, index }) {
  return (
    <article className="rounded-2xl border border-slate-200 bg-white p-5 sm:p-6">
      <div className="flex items-start gap-3">
        <span
          className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-tf-indigo/12 font-mono text-[12px] font-semibold text-tf-indigo-ink"
          aria-hidden="true"
        >
          {index + 1}
        </span>
        <h3 className="font-heading text-[1.08rem] font-semibold leading-snug text-tf-navy">{study.title}</h3>
      </div>

      <dl className="mt-4 space-y-2.5">
        {ROWS.map((row) => (
          <div key={row.key} className="sm:flex sm:gap-3">
            <dt className="shrink-0 text-[11px] font-semibold uppercase tracking-[0.12em] text-slate-500 sm:w-32 sm:pt-1">
              {row.label}
            </dt>
            <dd className="mt-0.5 text-[14px] leading-relaxed text-slate-700 sm:mt-0">{study[row.key]}</dd>
          </div>
        ))}
      </dl>
    </article>
  );
}