import { ExternalLink } from "lucide-react";

export default function ResourceCard({ resource }) {
  return (
    <a
      href={resource.url}
      target="_blank"
      rel="noopener noreferrer"
      className="group flex h-full flex-col rounded-xl border border-slate-200 bg-white p-4 transition-colors hover:border-tf-darkblue/40 hover:bg-slate-50 sm:p-5"
    >
      <div className="flex items-start justify-between gap-3">
        <h3 className="font-heading text-[15px] font-semibold leading-snug text-tf-navy">{resource.title}</h3>
        <ExternalLink
          className="mt-0.5 h-4 w-4 shrink-0 text-slate-400 transition-colors group-hover:text-tf-darkblue"
          aria-hidden="true"
        />
      </div>
      <p className="mt-1.5 flex-1 text-[13.5px] leading-relaxed text-slate-600">{resource.description}</p>
      <p className="mt-2 font-mono text-[11.5px] text-slate-400">{resource.source} · opens in a new tab</p>
    </a>
  );
}