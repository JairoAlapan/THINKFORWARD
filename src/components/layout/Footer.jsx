import { Link } from "react-router-dom";
import { NAV_LINKS } from "@/data/navigation";
import LogoMark from "./LogoMark";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-tf-navy text-slate-400">
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-10 md:grid-cols-[1.5fr_1fr]">
          <div>
            <Link to="/" className="inline-flex items-center gap-2.5" aria-label="ThinkForward home">
              <LogoMark className="h-8 w-8" />
              <span className="font-heading text-base font-semibold text-white">
                Think<span className="text-tf-teal">Forward</span>
              </span>
            </Link>
            <p className="mt-3 max-w-md text-sm leading-relaxed">
              A learning companion for STEM senior high school students: practise computational thinking,
              explain your solutions clearly, and build innovation readiness through guided activities and
              reflection.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-8">
            <nav aria-label="Footer navigation">
              <h2 className="text-xs font-semibold uppercase tracking-[0.14em] text-slate-400">Explore</h2>
              <ul className="mt-3 space-y-2 text-sm">
                <li>
                  <Link to="/" className="transition-colors hover:text-white">
                    Home
                  </Link>
                </li>
                {NAV_LINKS.map((link) => (
                  <li key={link.path}>
                    <Link to={link.path} className="transition-colors hover:text-white">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>

            <div>
              <h2 className="text-xs font-semibold uppercase tracking-[0.14em] text-slate-400">About</h2>
              <ul className="mt-3 space-y-2 text-sm">
                <li>No account needed</li>
                <li>Written answers stay in this browser</li>
                <li>
                  <Link to="/resources" className="transition-colors hover:text-white">
                    Sources and further reading
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-10 border-t border-white/10 pt-6 text-xs leading-relaxed text-slate-400">
          <p>
            ThinkForward is an educational resource. It does not score or measure your abilities, and the
            reflection prompts are not validated psychological tests or a replacement for any research
            instrument.
          </p>
          <p className="mt-2">
            Built for STEM Senior High School learners in the Philippines. © {new Date().getFullYear()}{" "}
            ThinkForward.
          </p>
        </div>
      </div>
    </footer>
  );
}