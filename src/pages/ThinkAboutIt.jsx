import { useState } from "react";
import { Info } from "lucide-react";
import PageHeader from "@/components/shared/PageHeader";
import SectionHeading from "@/components/shared/SectionHeading";
import ScenarioPicker from "@/components/activities/ScenarioPicker";
import ActivityForm from "@/components/activities/ActivityForm";
import { SCENARIOS } from "@/data/scenarios";

export default function ThinkAboutIt() {
  const [selectedId, setSelectedId] = useState(SCENARIOS[0].id);
  const scenario = SCENARIOS.find((item) => item.id === selectedId) || SCENARIOS[0];

  return (
    <>
      <PageHeader
        eyebrow="Practise · Think About It"
        title="Think About It"
        lead="Eight situations you might actually meet in school, at home, or in your community. Pick one, then write your way through the problem: identify it, suggest solutions, explain why one could work, judge its limits, and improve it."
        accent="sky"
      />

      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-4 rounded-2xl border border-slate-200 bg-white p-5 sm:grid-cols-3 sm:p-6">
          {[
            { step: "1", title: "Pick a situation", detail: "Choose the one closest to something you have experienced." },
            { step: "2", title: "Write your thinking", detail: "Answer in your own words. Prompts are optional help, not a template." },
            { step: "3", title: "Review and improve", detail: "Re-read your answer, judge the limits, and change one thing." },
          ].map((item) => (
            <div key={item.step} className="flex gap-3">
              <span
                className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-tf-sky/15 font-mono text-[12px] font-semibold text-tf-sky-ink"
                aria-hidden="true"
              >
                {item.step}
              </span>
              <div>
                <p className="text-[14.5px] font-semibold text-tf-navy">{item.title}</p>
                <p className="mt-0.5 text-[13.5px] leading-relaxed text-slate-600">{item.detail}</p>
              </div>
            </div>
          ))}
        </div>

        <section aria-labelledby="pick-situation" className="mt-10">
          <SectionHeading
            id="pick-situation"
            eyebrow="Choose one"
            title="Which situation do you want to work on?"
            description="Different situations need different kinds of solutions. You can switch at any time — each one keeps its own answers."
            accent="sky"
          />
          <div className="mt-5">
            <ScenarioPicker selectedId={selectedId} onSelect={setSelectedId} />
          </div>
        </section>

        <section aria-label="Writing activity" className="mt-8">
          <ActivityForm scenario={scenario} />
        </section>

        <p className="mt-6 flex items-start gap-2 rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-[13.5px] leading-relaxed text-slate-600">
          <Info className="mt-0.5 h-4 w-4 shrink-0 text-slate-400" aria-hidden="true" />
          <span>
            Your answers are saved only in this browser's local storage — they are not sent to a server, and
            no account is needed. If you clear your browser data, use a different browser, or switch device,
            they will not be there. There is no single correct answer: a solution is worth taking seriously
            when you can explain why it works and what limits it.
          </span>
        </p>
      </div>
    </>
  );
}