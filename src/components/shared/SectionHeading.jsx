import { cn } from "@/lib/utils";
import { accent as accentFor } from "@/lib/accents";

export default function SectionHeading({ id, eyebrow, title, description, accent = "teal", className }) {
  const a = accentFor(accent);

  return (
    <div className={cn("max-w-3xl", className)}>
      {eyebrow ? (
        <p className="flex items-center gap-2 text-sm font-semibold">
          <span className={cn("h-2 w-2 shrink-0 rounded-full", a.dot)} aria-hidden="true" />
          <span className={a.text}>{eyebrow}</span>
        </p>
      ) : null}
      <h2 id={id} className="mt-2 font-heading text-2xl font-semibold leading-snug text-tf-navy sm:text-[1.75rem]">
        {title}
      </h2>
      {description ? <p className="mt-2.5 text-slate-600">{description}</p> : null}
    </div>
  );
}