import { ArrowRight, CheckCircle2 } from "lucide-react";
import PageHeader from "@/components/shared/PageHeader";
import SectionHeading from "@/components/shared/SectionHeading";
import ButtonLink from "@/components/shared/ButtonLink";
import ReadinessCard from "@/components/ir/ReadinessCard";
import ConnectionPath from "@/components/ir/ConnectionPath";
import {
  IR_INTRO,
  READINESS_ASPECTS,
  NOT_ONLY_INVENTING,
  RECOGNISING_POTENTIAL,
} from "@/data/innovationReadiness";

export default function InnovationReadiness() {
  return (
    <>
      <PageHeader
        eyebrow="Learn · Innovation Readiness"
        title="Innovation Readiness"
        lead={IR_INTRO.lead}
        accent="indigo"
      />

      <div className="mx-auto max-w-5xl px-4 py-12 sm:px-6 lg:px-8">
        <section aria-labelledby="ir-what" className="rounded-2xl border border-slate-200 bg-white p-5 sm:p-6">
          <h2 id="ir-what" className="font-heading text-[1.25rem] font-semibold text-tf-navy">
            What innovation readiness means
          </h2>
          <p className="mt-2 text-[15.5px] leading-relaxed text-slate-700">{IR_INTRO.body}</p>

          <div className="mt-5 rounded-2xl border border-tf-indigo/30 bg-indigo-50/70 p-4 sm:p-5">
            <h3 className="font-heading text-[1.02rem] font-semibold text-tf-indigo-ink">
              {NOT_ONLY_INVENTING.title}
            </h3>
            <p className="mt-1.5 text-[14.5px] leading-relaxed text-slate-700">{NOT_ONLY_INVENTING.body}</p>
            <ul className="mt-3 grid gap-2 sm:grid-cols-2">
              {NOT_ONLY_INVENTING.examples.map((example) => (
                <li key={example} className="flex items-start gap-2 text-[14px] leading-relaxed text-slate-700">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-tf-indigo" aria-hidden="true" />
                  <span>{example}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section aria-labelledby="ir-aspects" className="mt-10">
          <SectionHeading
            id="ir-aspects"
            eyebrow="Five parts of readiness"
            title="What innovation readiness looks like in practice"
            description="These are habits, not personality traits. You can practise each one in a normal school week."
            accent="indigo"
          />
          <div className="mt-5 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {READINESS_ASPECTS.map((aspect) => (
              <ReadinessCard key={aspect.id} aspect={aspect} />
            ))}
          </div>
        </section>

        <section aria-labelledby="ir-connection" className="mt-12">
          <SectionHeading
            id="ir-connection"
            eyebrow="How the two connect"
            title="From identifying a problem to improving a solution"
            description="Computational thinking and innovation readiness are not separate subjects. One gives you the structure; the other gives you the willingness to keep going."
            accent="teal"
          />
          <ConnectionPath />
        </section>

        <section className="mt-10 rounded-2xl border border-slate-200 bg-white p-5 sm:p-6">
          <h2 className="font-heading text-[1.15rem] font-semibold text-tf-navy">
            {RECOGNISING_POTENTIAL.title}
          </h2>
          <p className="mt-2 text-[15px] leading-relaxed text-slate-700">{RECOGNISING_POTENTIAL.body}</p>
          <div className="mt-5 flex flex-wrap gap-3">
            <ButtonLink to="/innovation-corner" variant="ink">
              See improvement examples
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </ButtonLink>
            <ButtonLink to="/my-ideas" variant="ghost">
              Reflect on your own idea
            </ButtonLink>
          </div>
        </section>
      </div>
    </>
  );
}