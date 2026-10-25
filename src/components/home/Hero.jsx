import { ArrowRight, CheckCircle2 } from "lucide-react";
import ButtonLink from "@/components/shared/ButtonLink";
import FlowStrip from "@/components/shared/FlowStrip";
import CircuitMotif from "@/components/shared/CircuitMotif";
import HeroMap from "./HeroMap";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-tf-navy">
      <div className="absolute inset-0 tf-grid" aria-hidden="true" />
      <div className="absolute inset-0 tf-hero-glow" aria-hidden="true" />
      <CircuitMotif className="pointer-events-none absolute -bottom-10 right-0 hidden h-[320px] w-[560px] opacity-30 lg:block" />

      <div className="relative mx-auto max-w-6xl px-4 pb-14 pt-12 sm:px-6 sm:pb-16 sm:pt-16 lg:px-8 lg:pb-24 lg:pt-20">
        <div className="grid items-center gap-10 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)] lg:gap-14">
          <div className="tf-fade-up">
            <p className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1 text-[12px] font-medium text-slate-300">
              <span className="h-1.5 w-1.5 rounded-full bg-tf-teal" aria-hidden="true" />
              For STEM senior high school students
            </p>

            <h1 className="mt-5 font-heading text-[2.15rem] font-semibold leading-[1.1] text-white sm:text-[2.75rem] lg:text-[3.15rem]">
              Think it through.{" "}
              <span className="text-tf-teal">Explain it clearly.</span>{" "}
              <span className="text-tf-sky">Make it better.</span>
            </h1>

            <p className="mt-5 max-w-xl text-[17px] leading-relaxed text-slate-300">
              ThinkForward is a practice space for computational thinking and innovation readiness. Learn the
              five dimensions, work through real school problems, and get better at explaining why your
              solution could actually work.
            </p>

            <div className="mt-7 flex flex-wrap items-center gap-3">
              <ButtonLink to="/computational-thinking">
                Start Exploring
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </ButtonLink>
              <ButtonLink href="#why" variant="onDark">
                Why ThinkForward?
              </ButtonLink>
            </div>

            <p className="mt-3 flex items-center gap-1.5 text-xs text-slate-400">
              <CheckCircle2 className="h-3.5 w-3.5 text-tf-teal" aria-hidden="true" />
              No account needed · Written answers stay in your browser
            </p>

            <div className="mt-8 border-t border-white/10 pt-5">
              <FlowStrip />
            </div>
          </div>

          <div className="tf-fade-up tf-d2">
            <HeroMap />
          </div>
        </div>
      </div>
    </section>
  );
}