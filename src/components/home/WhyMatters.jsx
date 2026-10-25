import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import SectionHeading from "@/components/shared/SectionHeading";
import { accent as accentFor } from "@/lib/accents";
import { cn } from "@/lib/utils";

const POINTS = [
  {
    accent: "teal",
    title: "Why problem-solving gets the most attention",
    body: "In the research behind ThinkForward, problem-solving was the weakest of the five computational thinking dimensions among STEM senior high school students. Students could often suggest a solution but found it hard to explain and justify it. That is a skill you can practise — and this site is built around practising it.",
    link: { label: "See the guided activity", to: "/computational-thinking#guided-activity" },
  },
  {
    accent: "indigo",
    title: "Why innovation readiness matters",
    body: "Recognising opportunities, adapting when a plan fails, and improving something that already exists are habits that matter in STEM work — in research, in laboratories, and in the everyday processes of a school. You do not need to invent something new to be innovative.",
    link: { label: "Explore innovation readiness", to: "/innovation-readiness" },
  },
  {
    accent: "sky",
    title: "How to use this site",
    body: "Read one dimension, then use the activity to write your own answer. Then read another. Everything you write is saved only in this browser, so you can return, edit, and compare your thinking later.",
    link: { label: "Open My Ideas and Reflections", to: "/my-ideas" },
  },
];

export default function WhyMatters() {
  return (
    <section
      id="why"
      className="scroll-mt-24 border-t border-slate-200 bg-white px-4 py-14 sm:px-6 sm:py-16 lg:px-8"
      aria-labelledby="why-heading"
    >
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          id="why-heading"
          eyebrow="Why this exists"
          title="Two skills, one habit of mind"
          description="Computational thinking helps you work out the problem. Innovation readiness helps you act on it — and keep improving it after the first try."
          accent="indigo"
        />

        <div className="mt-8 grid gap-5 md:grid-cols-3">
          {POINTS.map((point) => {
            const a = accentFor(point.accent);
            return (
              <div key={point.title} className={cn("flex flex-col rounded-2xl border bg-tf-soft p-5 sm:p-6", a.border)}>
                <span className={cn("h-1.5 w-10 rounded-full", a.dot)} aria-hidden="true" />
                <h3 className="mt-4 font-heading text-[1.02rem] font-semibold leading-snug text-tf-navy">
                  {point.title}
                </h3>
                <p className="mt-2 flex-1 text-[14.5px] leading-relaxed text-slate-600">{point.body}</p>
                <Link
                  to={point.link.to}
                  className={cn("mt-4 inline-flex items-center gap-1.5 text-sm font-semibold", a.text)}
                >
                  {point.link.label}
                  <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </Link>
              </div>
            );
          })}
        </div>

        <p className="mt-8 max-w-3xl rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-[13.5px] leading-relaxed text-slate-600">
          ThinkForward is a learning companion, not a test. Reading and practising here has not been shown to
          improve skills by itself — any effect would need to be evaluated separately, and the reflection
          prompts are not validated psychological assessments.
        </p>
      </div>
    </section>
  );
}