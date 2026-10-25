import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";
import { accent as accentFor } from "@/lib/accents";
import CircuitMotif from "./CircuitMotif";

export default function PageHeader({ eyebrow, title, lead, accent = "teal", children }) {
  const a = accentFor(accent);

  return (
    <section className="relative overflow-hidden bg-tf-navy text-slate-100">
      <div className="absolute inset-0 tf-grid" aria-hidden="true" />
      <div className="absolute inset-0 tf-hero-glow" aria-hidden="true" />
      <CircuitMotif
        className="pointer-events-none absolute -right-16 -top-6 hidden h-[340px] w-[540px] opacity-45 sm:block"
        accent={a.hex}
      />
      <div className="relative mx-auto max-w-6xl px-4 pb-14 pt-10 sm:px-6 sm:pb-16 sm:pt-12 lg:px-8 lg:pb-20">
        <nav aria-label="Breadcrumb" className="text-sm text-slate-400">
          <Link to="/" className="rounded transition-colors hover:text-white">
            Home
          </Link>
          <span className="px-2 text-slate-600" aria-hidden="true">
            /
          </span>
          <span className="text-slate-300">{title}</span>
        </nav>

        <div className="mt-7 max-w-3xl">
          <p className="flex items-center gap-2 text-sm font-semibold">
            <span className={cn("h-2 w-2 shrink-0 rounded-full", a.dot)} aria-hidden="true" />
            <span className={a.navText}>{eyebrow}</span>
          </p>
          <h1 className="mt-3 font-heading text-[1.9rem] font-semibold leading-[1.15] text-white sm:text-4xl lg:text-[2.75rem]">
            {title}
          </h1>
          <p className="mt-4 text-[17px] leading-relaxed text-slate-300">{lead}</p>
          {children}
        </div>
      </div>
      <div className="relative h-px w-full bg-gradient-to-r from-transparent via-white/25 to-transparent" aria-hidden="true" />
    </section>
  );
}