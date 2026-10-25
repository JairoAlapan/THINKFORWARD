import { useEffect, useMemo, useState } from "react";
import { AlertCircle, CheckCircle2, RotateCcw, Save } from "lucide-react";
import WritingField from "@/components/shared/WritingField";
import AnswerProgress from "@/components/shared/AnswerProgress";
import useLocalDraft from "@/hooks/useLocalDraft";
import { ACTIVITY_FIELDS, EMPTY_ACTIVITY } from "@/data/scenarios";

const timeFormatter = new Intl.DateTimeFormat(undefined, { hour: "numeric", minute: "2-digit" });

export default function ActivityForm({ scenario }) {
  const key = `tf.activity.${scenario.id}`;
  const { values, setField, save, clear, savedAt, restoreStamp } = useLocalDraft(key, EMPTY_ACTIVITY);
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState("idle");
  const [confirmClear, setConfirmClear] = useState(false);
  const [lastSaved, setLastSaved] = useState(null);

  useEffect(() => {
    setErrors({});
    setStatus("idle");
    setConfirmClear(false);
    setLastSaved(restoreStamp());
  }, [scenario.id]);

  const answered = useMemo(
    () => ACTIVITY_FIELDS.filter((field) => values[field.id]?.trim()).length,
    [values]
  );

  const handleSave = () => {
    const nextErrors = {};
    ACTIVITY_FIELDS.filter((field) => field.required).forEach((field) => {
      const text = (values[field.id] || "").trim();
      if (text.length < 12) {
        nextErrors[field.id] = "Add at least a sentence so your thinking is clear.";
      }
    });

    setErrors(nextErrors);

    if (Object.keys(nextErrors).length > 0) {
      setStatus("incomplete");
      const firstId = Object.keys(nextErrors)[0];
      document.getElementById(`${scenario.id}-${firstId}`)?.focus();
      return;
    }

    save();
    setStatus("saved");
    setLastSaved(new Date());
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
    <div className="rounded-2xl border border-slate-200 bg-white p-5 sm:p-6">
      <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
        <div>
          <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-slate-500">
            Selected situation
          </p>
          <h3 className="mt-1 font-heading text-[1.15rem] font-semibold leading-snug text-tf-navy">
            {scenario.title}
          </h3>
        </div>
        <div className="w-full sm:w-48">
          <AnswerProgress answered={answered} total={ACTIVITY_FIELDS.length} accent="sky" />
        </div>
      </div>

      <p className="mt-3 text-[14.5px] leading-relaxed text-slate-700">{scenario.situation}</p>

      <div className="mt-3 rounded-xl border border-tf-sky/30 bg-sky-50/70 p-3.5">
        <p className="text-[11px] font-semibold uppercase tracking-[0.12em] text-tf-sky-ink">
          Worth thinking about
        </p>
        <ul className="mt-1.5 space-y-1">
          {scenario.consider.map((item) => (
            <li key={item} className="flex gap-2 text-[13.5px] leading-relaxed text-slate-700">
              <span className="mt-[7px] h-1 w-1 shrink-0 rounded-full bg-tf-sky" aria-hidden="true" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>

      <form
        className="mt-5 space-y-5"
        onSubmit={(event) => {
          event.preventDefault();
          handleSave();
        }}
        noValidate
      >
        {ACTIVITY_FIELDS.map((field) => (
          <WritingField
            key={field.id}
            id={`${scenario.id}-${field.id}`}
            label={field.label}
            hint={field.hint}
            prompt={field.prompt}
            value={values[field.id] || ""}
            onChange={(text) => {
              setField(field.id, text);
              if (errors[field.id]) {
                setErrors((prev) => {
                  const next = { ...prev };
                  delete next[field.id];
                  return next;
                });
              }
            }}
            rows={field.rows}
            required={field.required}
            error={errors[field.id]}
          />
        ))}

        {status === "incomplete" ? (
          <div
            role="status"
            className="flex items-start gap-2 rounded-xl border border-tf-coral/40 bg-rose-50 px-4 py-3 text-[14px] leading-relaxed text-rose-900"
          >
            <AlertCircle className="mt-0.5 h-4 w-4 shrink-0" aria-hidden="true" />
            <span>
              Some parts of your answer are still thin or missing. They are marked above — your other answers
              are still here, so you can come back to them.
            </span>
          </div>
        ) : null}

        {status === "saved" ? (
          <div
            role="status"
            className="flex items-start gap-2 rounded-xl border border-tf-teal/40 bg-tf-mint/70 px-4 py-3 text-[14px] leading-relaxed text-teal-900"
          >
            <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0" aria-hidden="true" />
            <span>
              Saved in this browser at {savedAt ? timeFormatter.format(savedAt) : "just now"}. You can edit it
              anytime.
            </span>
          </div>
        ) : null}

        {status === "cleared" ? (
          <div role="status" className="rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-[14px] text-slate-600">
            This activity was cleared from this browser.
          </div>
        ) : null}

        <div className="flex flex-wrap items-center gap-3 border-t border-slate-200 pt-5">
          <button
            type="submit"
            className="inline-flex items-center gap-2 rounded-xl bg-tf-navy px-5 py-3 text-[14.5px] font-semibold text-white transition-colors hover:bg-tf-navy-700"
          >
            <Save className="h-4 w-4" aria-hidden="true" />
            Check and save my answers
          </button>
          <button
            type="button"
            onClick={handleClear}
            className="inline-flex items-center gap-2 rounded-xl border border-slate-300 px-4 py-3 text-[14px] font-medium text-slate-600 transition-colors hover:border-slate-400 hover:text-tf-navy"
          >
            <RotateCcw className="h-4 w-4" aria-hidden="true" />
            {confirmClear ? "Tap again to clear" : "Clear this activity"}
          </button>
          {lastSaved && status === "idle" ? (
            <p className="text-[12.5px] text-slate-500">
              Last saved in this browser at {timeFormatter.format(lastSaved)}.
            </p>
          ) : null}
        </div>
      </form>
    </div>
  );
}