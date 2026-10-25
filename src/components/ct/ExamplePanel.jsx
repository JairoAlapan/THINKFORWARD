import { cn } from "@/lib/utils";
import { accent as accentFor } from "@/lib/accents";

function Field({ label, children }) {
  return (
    <div>
      <dt className="text-[11px] font-semibold uppercase tracking-[0.12em] text-slate-500">{label}</dt>
      <dd className="mt-1 text-[14.5px] leading-relaxed text-slate-700">{children}</dd>
    </div>
  );
}

export default function ExamplePanel({ example, accent = "teal", label = "Real-life example" }) {
  const a = accentFor(accent);

  return (
    <div className={cn("rounded-2xl border p-4 sm:p-5", a.panel, a.border)}>
      <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-slate-500">{label}</p>
      <h4 className="mt-1 font-heading text-[1.02rem] font-semibold leading-snug text-tf-navy">
        {example.title}
      </h4>

      <dl className="mt-3 space-y-3">
        <Field label="Situation">{example.situation}</Field>
        <Field label="The problem">{example.problem}</Field>

        {example.causes ? (
          <Field label="Possible causes">
            <ul className="list-disc space-y-1 pl-4">
              {example.causes.map((cause) => (
                <li key={cause}>{cause}</li>
              ))}
            </ul>
          </Field>
        ) : null}

        {example.steps ? (
          <Field label="Steps in order">
            <ol className="list-decimal space-y-1 pl-4">
              {example.steps.map((step) => (
                <li key={step}>{step}</li>
              ))}
            </ol>
          </Field>
        ) : null}

        {example.ideas ? (
          <Field label="Possible solutions">
            <ul className="list-disc space-y-1 pl-4">
              {example.ideas.map((idea) => (
                <li key={idea}>{idea}</li>
              ))}
            </ul>
          </Field>
        ) : null}

        <Field label="Why it could work">{example.why}</Field>
        <Field label="Limitation">{example.limitation}</Field>
        <Field label="How it could be improved">{example.improvement}</Field>
      </dl>
    </div>
  );
}