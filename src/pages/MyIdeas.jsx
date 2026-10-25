import { ArrowRight, LockKeyhole, NotebookPen } from "lucide-react";
import PageHeader from "@/components/shared/PageHeader";
import ButtonLink from "@/components/shared/ButtonLink";
import ReflectionForm from "@/components/reflections/ReflectionForm";

export default function MyIdeas() {
  return (
    <>
      <PageHeader
        eyebrow="Reflect · My Ideas and Reflections"
        title="My Ideas and Reflections"
        lead="Your own problem, your own solution, your own reasoning. Write it down, explain it as if to a classmate, judge the limits honestly, then reflect on what your thinking showed you."
        accent="coral"
      />

      <div className="mx-auto max-w-4xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-4 sm:grid-cols-[1fr_auto]">
          <div className="rounded-2xl border border-tf-coral/30 bg-rose-50/60 p-5">
            <p className="flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.14em] text-tf-coral-ink">
              <LockKeyhole className="h-3.5 w-3.5" aria-hidden="true" />
              Where your answers go
            </p>
            <p className="mt-2 text-[14px] leading-relaxed text-slate-700">
              Everything you write is saved in this browser's local storage. Nothing is uploaded, shared, or
              sent to another service, and you do not need an account. If you clear your browser data, switch
              browsers, or use another device, your answers will not appear there.
            </p>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-white p-5 sm:w-56">
            <p className="flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.14em] text-slate-500">
              <NotebookPen className="h-3.5 w-3.5" aria-hidden="true" />
              Keep in mind
            </p>
            <p className="mt-2 text-[13.5px] leading-relaxed text-slate-600">
              These prompts are for your own reflection. They are not a test, they do not measure your
              abilities, and they are not a substitute for any research instrument.
            </p>
          </div>
        </div>

        <div className="mt-8">
          <ReflectionForm />
        </div>

        <div className="mt-8 flex flex-wrap items-center gap-3 rounded-2xl border border-slate-200 bg-white p-5">
          <p className="flex-1 text-[14.5px] leading-relaxed text-slate-600">
            Want more practice before you write your own idea? Work through one of the guided situations
            first.
          </p>
          <ButtonLink to="/think-about-it" variant="ghost">
            Practise a situation
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </ButtonLink>
        </div>
      </div>
    </>
  );
}