import { BrainCircuit, Lightbulb, PenLine, Sparkles, NotebookPen, Library } from "lucide-react";
import SectionHeading from "@/components/shared/SectionHeading";
import ShortcutCard from "./ShortcutCard";

const CARDS = [
  {
    title: "Computational Thinking",
    description:
      "The five dimensions explained with real school examples — and a guided problem-solving activity at the end.",
    to: "/computational-thinking",
    action: "Explore the five dimensions",
    accent: "teal",
    icon: BrainCircuit,
    badge: "Start here",
    wide: true,
  },
  {
    title: "Innovation Readiness",
    description:
      "Openness, adaptability, alternatives, improvement, and noticing opportunities — with practical examples.",
    to: "/innovation-readiness",
    action: "See how readiness works",
    accent: "indigo",
    icon: Lightbulb,
    wide: true,
  },
  {
    title: "Think About It",
    description: "Eight school and community situations, with write-in prompts that push you to explain your reasoning.",
    to: "/think-about-it",
    action: "Practise a situation",
    accent: "sky",
    icon: PenLine,
  },
  {
    title: "Innovation Corner",
    description: "Facts, real improvement stories, and “how would you improve this?” prompts.",
    to: "/innovation-corner",
    action: "Browse ideas",
    accent: "yellow",
    icon: Sparkles,
  },
  {
    title: "My Ideas and Reflections",
    description: "Write your own problem and solution, then reflect on what felt easy and what felt hard.",
    to: "/my-ideas",
    action: "Start reflecting",
    accent: "coral",
    icon: NotebookPen,
  },
  {
    title: "Resources",
    description: "Credible, free places to keep learning about thinking, design, and STEM.",
    to: "/resources",
    action: "Open resources",
    accent: "navy",
    icon: Library,
  },
];

export default function ShortcutGrid() {
  return (
    <section className="bg-tf-soft px-4 py-14 sm:px-6 sm:py-16 lg:px-8" aria-labelledby="shortcuts-heading">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          id="shortcuts-heading"
          eyebrow="Where do you want to go?"
          title="Six ways into ThinkForward"
          description="Each section stands on its own. Start with the dimensions, jump to an activity, or go straight to writing your own idea."
        />
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {CARDS.map((card) => (
            <ShortcutCard key={card.to} card={card} />
          ))}
        </div>
      </div>
    </section>
  );
}