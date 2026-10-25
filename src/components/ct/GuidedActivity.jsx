import { ArrowRight, CheckCircle2, ChevronDown } from "lucide-react";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import ButtonLink from "@/components/shared/ButtonLink";
import { PROBLEM_SOLVING_STEPS } from "@/data/computationalThinking";

export default function GuidedActivity() {
  return (
    <section id="guided-activity" className="scroll-mt-14">
      <div className="overflow-hidden rounded-3xl border border-tf-teal/40 bg-tf-navy p-5 text-slate-200 sm:p-7 lg:p-8">
        <p className="flex items-center gap-2 text-sm font-semibold text-tf-teal">
          <span className="h-2 w-2 rounded-full bg-tf-teal" aria-hidden="true" />
          Guided activity
        </p>
        <h2 className="mt-2 font-heading text-[1.5rem] font-semibold leading-tight text-white sm:text-[1.8rem]">
          Work through one problem, step by step
        </h2>
        <p className="mt-2 max-w-2xl text-[15.5px] leading-relaxed text-slate-300">
          Use any problem from your own school week. Answer each step in your own words — the prompts are only
          there to help if you get stuck. There is no single correct answer; different solutions can both be
          valid if you can explain them and improve them.
        </p>

        <ol className="mt-6 space-y-3">
          {PROBLEM_SOLVING_STEPS.map((step) => (
            <li key={step.number} className="rounded-2xl border border-white/10 bg-white/[0.04] p-4 sm:p-5">
              <div className="flex items-start gap-3.5">
                <span
                  className="mt-0.5 inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-tf-teal/15 font-mono text-sm font-semibold text-tf-teal"
                  aria-hidden="true"
                >
                  {step.number}
                </span>

                <div className="min-w-0 flex-1">
                  <h3 className="font-heading text-[16px] font-semibold text-white">{step.title}</h3>
                  <p className="mt-1 text-[15px] font-medium text-slate-100">{step.question}</p>
                  <p className="mt-1.5 text-[14px] leading-relaxed text-slate-400">{step.detail}</p>

                  <Collapsible>
                    <CollapsibleTrigger className="group mt-3 inline-flex items-center gap-1.5 rounded-lg border border-white/15 px-2.5 py-1.5 text-[13px] font-medium text-slate-200 transition-colors hover:border-white/30 hover:bg-white/5">
                      Optional prompts
                      <ChevronDown
                        className="h-3.5 w-3.5 transition-transform group-data-[state=open]:rotate-180"
                        aria-hidden="true"
                      />
                    </CollapsibleTrigger>
                    <CollapsibleContent>
                      <ul className="mt-2 space-y-1.5 rounded-lg border border-white/10 bg-black/20 p-3 text-[13.5px] leading-relaxed text-slate-300">
                        {step.nudges.map((nudge) => (
                          <li key={nudge} className="flex gap-2">
                            <span className="mt-[7px] h-1 w-1 shrink-0 rounded-full bg-tf-teal" aria-hidden="true" />
                            <span>{nudge}</span>
                          </li>
                        ))}
                      </ul>
                    </CollapsibleContent>
                  </Collapsible>

                  <p className="mt-2.5 flex items-start gap-1.5 text-[12.5px] leading-relaxed text-slate-400">
                    <CheckCircle2 className="mt-0.5 h-3.5 w-3.5 shrink-0 text-tf-teal/70" aria-hidden="true" />
                    <span>{step.strongAnswer}</span>
                  </p>
                </div>
              </div>
            </li>
          ))}
        </ol>

        <div className="mt-6 flex flex-wrap items-center gap-3 border-t border-white/10 pt-5">
          <ButtonLink to="/think-about-it">
            Try it on a real situation
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </ButtonLink>
          <p className="text-[13px] text-slate-400">Your answers there are saved only in this browser.</p>
        </div>
      </div>
    </section>
  );
}