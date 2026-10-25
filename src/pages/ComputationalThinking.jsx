import { Link } from "react-router-dom";
import PageHeader from "@/components/shared/PageHeader";
import FlowStrip from "@/components/shared/FlowStrip";
import DimensionNav from "@/components/ct/DimensionNav";
import DimensionSection from "@/components/ct/DimensionSection";
import GuidedActivity from "@/components/ct/GuidedActivity";
import { CT_INTRO, DIMENSIONS } from "@/data/computationalThinking";
import { accent as accentFor } from "@/lib/accents";
import { cn } from "@/lib/utils";

export default function ComputationalThinking() {
  return (
    <>
      <PageHeader
        eyebrow="Learn · Computational Thinking"
        title={CT_INTRO.title}
        lead={CT_INTRO.lead}
        accent="teal"
      >
        <div className="mt-6">
          <FlowStrip />
        </div>
      </PageHeader>

      <DimensionNav />

      <div className="mx-auto max-w-4xl px-4 py-10 sm:px-6 sm:py-12 lg:px-8">
        <section aria-labelledby="ct-overview" className="rounded-2xl border border-slate-200 bg-white p-5 sm:p-6">
          <h2 id="ct-overview" className="font-heading text-[1.2rem] font-semibold text-tf-navy">
            Not just for computer class
          </h2>
          <p className="mt-2 text-[15.5px] leading-relaxed text-slate-700">{CT_INTRO.body}</p>

          <ul className="mt-4 flex flex-wrap gap-2">
            {DIMENSIONS.map((dimension) => {
              const a = accentFor(dimension.accent);
              return (
                <li key={dimension.id}>
                  <Link
                    to={`/computational-thinking#${dimension.id}`}
                    className={cn(
                      "inline-flex items-center gap-1.5 rounded-full border px-3 py-1.5 text-[13px] font-medium transition-colors hover:bg-white",
                      a.border,
                      a.text,
                      a.panel
                    )}
                  >
                    <span className={cn("h-1.5 w-1.5 rounded-full", a.dot)} aria-hidden="true" />
                    {dimension.name}
                  </Link>
                </li>
              );
            })}
          </ul>
        </section>

        <div className="mt-8 space-y-8">
          {DIMENSIONS.map((dimension) => (
            <DimensionSection key={dimension.id} dimension={dimension} />
          ))}
        </div>

        <div className="mt-10">
          <GuidedActivity />
        </div>
      </div>
    </>
  );
}