import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { accent as accentFor } from "@/lib/accents";

export default function ShortcutCard({ card }) {
  const a = accentFor(card.accent);
  const Icon = card.icon;

  return (
    <Link
      to={card.to}
      className={cn(
        "group relative flex h-full flex-col overflow-hidden rounded-2xl border bg-white p-5 transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-slate-900/5 sm:p-6",
        a.border,
        card.wide && "sm:col-span-2"
      )}
    >
      <div className={cn("absolute inset-x-0 top-0 h-1", a.dot)} aria-hidden="true" />
      <div className="flex items-start justify-between gap-3">
        <span className={cn("inline-flex h-11 w-11 items-center justify-center rounded-xl", a.chip)}>
          <Icon className="h-[22px] w-[22px]" aria-hidden="true" />
        </span>
        {card.badge ? (
          <span className="rounded-full bg-tf-navy px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wide text-tf-teal">
            {card.badge}
          </span>
        ) : null}
      </div>

      <h3 className="mt-4 font-heading text-[1.06rem] font-semibold leading-snug text-tf-navy">
        {card.title}
      </h3>
      <p className="mt-1.5 flex-1 text-[14.5px] leading-relaxed text-slate-600">{card.description}</p>

      <span className={cn("mt-4 inline-flex items-center gap-1.5 text-sm font-semibold", a.text)}>
        {card.action}
        <ArrowRight
          className="h-4 w-4 transition-transform group-hover:translate-x-0.5"
          aria-hidden="true"
        />
      </span>
    </Link>
  );
}