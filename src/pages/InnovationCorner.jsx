import { ArrowUpRight, ExternalLink, Lightbulb, Quote } from "lucide-react";
import PageHeader from "@/components/shared/PageHeader";
import SectionHeading from "@/components/shared/SectionHeading";
import ButtonLink from "@/components/shared/ButtonLink";
import ImprovementCard from "@/components/corner/ImprovementCard";
import CaseStudyCard from "@/components/corner/CaseStudyCard";
import { FACTS, IMPROVEMENTS, CASE_STUDIES, CORNER_PROMPTS, CORNER_LINKS } from "@/data/innovationCorner";
import { accent as accentFor } from "@/lib/accents";
import { cn } from "@/lib/utils";

export default function InnovationCorner() {
  return (
    <>
      <PageHeader
        eyebrow="Explore · Innovation Corner"
        title="Innovation Corner"
        lead="Improvement stories, familiar things worth redesigning, and prompts to get you looking at your school the way an innovator would. No brands you have never heard of — just problems you have probably met."
        accent="yellow"
      />

      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
        <section aria-labelledby="corner-facts">
          <SectionHeading
            id="corner-facts"
            eyebrow="Did you know"
            title="Four improvements that started somewhere unexpected"
            description="None of these began with a perfect plan. Each began with someone noticing a small, repeated problem."
            accent="yellow"
          />
          <div className="mt-5 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {FACTS.map((fact) => {
              const a = accentFor(fact.accent);
              return (
                <div key={fact.title} className={cn("flex h-full flex-col rounded-2xl border bg-white p-4", a.border)}>
                  <Quote className={cn("h-4 w-4", a.text)} aria-hidden="true" />
                  <h3 className="mt-2 font-heading text-[14.5px] font-semibold leading-snug text-tf-navy">
                    {fact.title}
                  </h3>
                  <p className="mt-1.5 text-[13.5px] leading-relaxed text-slate-600">{fact.body}</p>
                </div>
              );
            })}
          </div>
        </section>

        <section aria-labelledby="corner-improve" className="mt-12">
          <SectionHeading
            id="corner-improve"
            eyebrow="How would you improve this?"
            title="Six everyday things worth improving"
            description="Each of these already has a problem built into how it works. Read the situation, then decide what you would change and why."
            accent="sky"
          />
          <div className="mt-5 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {IMPROVEMENTS.map((item, index) => (
              <ImprovementCard key={item.id} item={item} index={index} />
            ))}
          </div>
        </section>

        <section aria-labelledby="corner-cases" className="mt-12">
          <SectionHeading
            id="corner-cases"
            eyebrow="Case studies"
            title="Three real improvement stories"
            description="Short, verifiable examples of improvements rather than inventions — including what each one cost."
            accent="indigo"
          />
          <div className="mt-5 space-y-4">
            {CASE_STUDIES.map((study, index) => (
              <CaseStudyCard key={study.title} study={study} index={index} />
            ))}
          </div>
        </section>

        <section aria-labelledby="corner-prompts" className="mt-12">
          <div className="rounded-2xl border border-tf-yellow/40 bg-amber-50/70 p-5 sm:p-6">
            <h2 id="corner-prompts" className="flex items-center gap-2 font-heading text-[1.15rem] font-semibold text-tf-yellow-ink">
              <Lightbulb className="h-4 w-4" aria-hidden="true" />
              Reflection prompts to take with you
            </h2>
            <ul className="mt-3 grid gap-2 sm:grid-cols-2">
              {CORNER_PROMPTS.map((prompt) => (
                <li key={prompt} className="flex gap-2 text-[14px] leading-relaxed text-slate-700">
                  <span className="mt-[7px] h-1.5 w-1.5 shrink-0 rounded-full bg-tf-yellow-ink" aria-hidden="true" />
                  <span>{prompt}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section aria-labelledby="corner-links" className="mt-10">
          <h2 id="corner-links" className="font-heading text-[1.1rem] font-semibold text-tf-navy">
            Places to keep exploring
          </h2>
          <ul className="mt-3 grid gap-3 sm:grid-cols-3">
            {CORNER_LINKS.map((link) => (
              <li key={link.url}>
                <a
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex h-full flex-col rounded-xl border border-slate-200 bg-white p-4 transition-colors hover:border-tf-darkblue/40 hover:bg-slate-50"
                >
                  <span className="flex items-start gap-1.5 text-[14px] font-semibold leading-snug text-tf-navy">
                    {link.label}
                    <ExternalLink className="mt-0.5 h-3.5 w-3.5 shrink-0 text-slate-400" aria-hidden="true" />
                  </span>
                  <span className="mt-1.5 text-[13px] leading-relaxed text-slate-600">{link.description}</span>
                  <span className="mt-1 text-[11.5px] text-slate-400">
                    Opens in a new tab
                  </span>
                </a>
              </li>
            ))}
          </ul>
        </section>

        <div className="mt-10 flex flex-wrap items-center gap-3 rounded-2xl border border-slate-200 bg-white p-5">
          <p className="flex-1 text-[14.5px] leading-relaxed text-slate-600">
            Found something in your own school worth improving? Write it down before you forget the details.
          </p>
          <ButtonLink to="/my-ideas" variant="ink">
            Write my idea
            <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
          </ButtonLink>
        </div>
      </div>
    </>
  );
}