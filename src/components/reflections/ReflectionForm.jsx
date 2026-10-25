import { useState } from "react";
import { AlertCircle, CheckCircle2, RotateCcw, Save, ShieldCheck } from "lucide-react";
import WritingField from "@/components/shared/WritingField";
import AnswerProgress from "@/components/shared/AnswerProgress";
import useLocalDraft from "@/hooks/useLocalDraft";
import { REFLECTION_QUESTIONS, EMPTY_REFLECTION } from "@/data/reflectionQuestions";

const STORAGE_KEY = "tf.reflections.v1";
const timeFormatter = new Intl.DateTimeFormat(undefined, {
  dateStyle: "medium",
  timeStyle: "short",
});

export default function ReflectionForm() {
  const { values, setField, save, clear, savedAt, restoreStamp } = useLocalDraft(STORAGE_KEY, EMPTY_REFLECTION);
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState("idle");
  const [confirmClear, setConfirmClear] = useState(false);
  const [lastSaved, setLastSaved] = useState(() => restoreStamp());

  const answered = REFLECTION_QUESTIONS.filter((question) => values[question.id]?.trim()).length;

  const handleSave = () => {
    const nextErrors = {};
    REFLECTION_QUESTIONS.filter((question) => question.required).forEach((question) => {
      if ((values[question.id] || "").trim().length < 12) {
        nextErrors[question.id] = "Write at least a sentence so the idea is clear to someone else.";
      }
    });

    setErrors(nextErrors);

    if (Object.keys(nextErrors).length > 0) {
      setStatus("incomplete");
      const firstId = Object.keys(nextErrors)[0];
      document.getElementById(`reflection-${firstId}`)?.focus();
      return;
    }

    save();
    setLastSaved(new Date());
    setStatus("saved");
  };

  const handleClear = () => {
    if (!confirmClear) {
      setConfirmClear(true);
      return;
    }
    clear();
    setErrors({});
    setStatus("cleared");
    setConfirmClear(false);
    setLastSaved(null);
  };

  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-5 sm:p-7">
      <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
        <div>
          <h2 className="font-heading text-[1.2rem] font-semibold text-tf-navy">Your idea and reflection</h2>
          <p className="mt-1 text-[14px] leading-relaxed text-slate-600">
            Answer in your own words. Draft answers are fine — you can edit them any time.
          </p>
        </div>
        <div className="w-full sm:w-48">
          <AnswerProgress answered={answered} total={REFLECTION_QUESTIONS.length} accent="coral" />
        </div>
      </div>

      <form
        className="mt-6 space-y-5"
        onSubmit={(event) => {
          event.preventDefault();
          handleSave();
        }}
        noValidate
      >
        {REFLECTION_QUESTIONS.map((question) => (
          <WritingField
            key={question.id}
            id={`reflection-${question.id}`}
            label={question.label}
            hint={question.hint}
            prompt={question.prompt}
            value={values[question.id] || ""}
            onChange={(text) => {
              setField(question.id, text);
              if (errors[question.id]) {
                setErrors((prev) => {
                  const next = { ...prev };
                  delete next[question.id];
                  return next;
                });
              }
            }}
            rows={question.rows}
            required={question.required}
            error={errors[question.id]}
            accentText="text-tf-coral-ink"
          />
        ))}

        {status === "incomplete" ? (
          <div
            role="status"
            className="flex items-start gap-2 rounded-xl border border-tf-coral/40 bg-rose-50 px-4 py-3 text-[14px] leading-relaxed text-rose-900"
          >
            <AlertCircle className="mt-0.5 h-4 w-4 shrink-0" aria-hidden="true" />
            <span>
              A few core answers are still missing or too short. They are marked above — nothing you have
              written has been lost.
            </span>
          </div>
        ) : null}

        {status === "saved" ? (
          <div
            role="status"
            className="flex items-start gap-2 rounded-xl border border-tf-teal/40 bg-tf-mint/70 px-4 py-3 text-[14px] leading-relaxed text-teal-900"
          >
            <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0" aria-hidden="true" />
            <span>Saved in this browser. You can return, edit, and save again whenever you like.</span>
          </div>
        ) : null}

        {status === "cleared" ? (
          <div role="status" className="rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-[14px] text-slate-600">
            Your answers were cleared from this browser.
          </div>
        ) : null}

        <div className="flex flex-wrap items-center gap-3 border-t border-slate-200 pt-5">
          <button
            type="submit"
            className="inline-flex items-center gap-2 rounded-xl bg-tf-coral px-5 py-3 text-[14.5px] font-semibold text-tf-navy transition-colors hover:bg-tf-coral/90"
          >
            <Save className="h-4 w-4" aria-hidden="true" />
            Save my reflection
          </button>
          <button
            type="button"
            onClick={handleClear}
            className="inline-flex items-center gap-2 rounded-xl border border-slate-300 px-4 py-3 text-[14px] font-medium text-slate-600 transition-colors hover:border-slate-400 hover:text-tf-navy"
          >
            <RotateCcw className="h-4 w-4" aria-hidden="true" />
            {confirmClear ? "Tap again to clear everything" : "Clear all responses"}
          </button>
        </div>

        <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-[12.5px] text-slate-500">
          {lastSaved ? (
            <span className="inline-flex items-center gap-1.5">
              <ShieldCheck className="h-3.5 w-3.5 text-tf-teal-ink" aria-hidden="true" />
              Last saved {timeFormatter.format(lastSaved)}
            </span>
          ) : null}
          {savedAt ? <span>Saved just now at {timeFormatter.format(savedAt)}</span> : null}
          <span>Stored only in this browser.</span>
        </div>
      </form>
    </div>
  );
}