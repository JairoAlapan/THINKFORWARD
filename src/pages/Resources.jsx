import { Info } from "lucide-react";
import PageHeader from "@/components/shared/PageHeader";
import SectionHeading from "@/components/shared/SectionHeading";
import ResourceCard from "@/components/resources/ResourceCard";
import { RESOURCE_GROUPS, RESOURCE_NOTE } from "@/data/resources";
import { accent as accentFor } from "@/lib/accents";

export default function Resources() {
  return (
    <>
      <PageHeader
        eyebrow="Reference · Resources"
        title="Resources"
        lead="Free, credible places to keep learning about computational thinking, problem-solving, design, and STEM. Each entry explains what the site offers and who it is for."
        accent="navy"
      />

      <div className="mx-auto max-w-5xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="space-y-12">
          {RESOURCE_GROUPS.map((group, index) => {
            const a = accentFor(group.accent);
            return (
              <section key={group.id} aria-labelledby={`group-${group.id}`}>
                <SectionHeading
                  id={`group-${group.id}`}
                  eyebrow={`Collection ${index + 1}`}
                  title={group.title}
                  description={group.intro}
                  accent={group.accent}
                />
                <div className={`mt-5 h-px w-full ${a.dot} opacity-30`} aria-hidden="true" />
                <ul className="mt-5 grid gap-3 sm:grid-cols-2">
                  {group.items.map((resource) => (
                    <li key={resource.url}>
                      <ResourceCard resource={resource} />
                    </li>
                  ))}
                </ul>
              </section>
            );
          })}
        </div>

        <p className="mt-10 flex items-start gap-2 rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-[13.5px] leading-relaxed text-slate-600">
          <Info className="mt-0.5 h-4 w-4 shrink-0 text-slate-400" aria-hidden="true" />
          <span>{RESOURCE_NOTE}</span>
        </p>
      </div>
    </>
  );
}