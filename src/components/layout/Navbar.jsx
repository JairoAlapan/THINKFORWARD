import { NavLink, Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { NAV_LINKS } from "@/data/navigation";
import LogoMark from "./LogoMark";
import MobileMenu from "./MobileMenu";

const ACTIVE_TEXT = {
  teal: "text-tf-teal",
  indigo: "text-tf-indigo",
  sky: "text-tf-sky",
  yellow: "text-tf-yellow",
  coral: "text-tf-coral",
  darkblue: "text-tf-sky",
};

const linkClass = ({ isActive }) =>
  cn(
    "inline-flex items-center rounded-lg px-2 py-2 text-[13px] font-medium transition-colors xl:text-[13.5px]",
    isActive ? "bg-white/10 text-white" : "text-slate-300 hover:bg-white/5 hover:text-white"
  );

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-tf-navy/95 backdrop-blur supports-[backdrop-filter]:bg-tf-navy/80">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-3 px-4 sm:px-6 lg:h-[68px] lg:px-8">
        <Link to="/" className="flex shrink-0 items-center gap-2.5" aria-label="ThinkForward home">
          <LogoMark className="h-9 w-9" />
          <span className="font-heading text-[1.05rem] font-semibold tracking-tight text-white">
            Think<span className="text-tf-teal">Forward</span>
          </span>
        </Link>

        <nav aria-label="Main" className="hidden lg:block">
          <ul className="flex items-center gap-0.5 xl:gap-1">
            <li>
              <NavLink to="/" end className={linkClass}>
                Home
              </NavLink>
            </li>
            {NAV_LINKS.map((link) => (
              <li key={link.path}>
                <NavLink to={link.path} className={linkClass}>
                  {({ isActive }) => (
                    <span className="flex items-center gap-1.5">
                      <span
                        className={cn("h-1.5 w-1.5 shrink-0 rounded-full", isActive ? link.dot : "bg-transparent")}
                        aria-hidden="true"
                      />
                      <span className={cn(isActive && ACTIVE_TEXT[link.accent])}>{link.label}</span>
                    </span>
                  )}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-2">
          <Link
            to="/computational-thinking"
            className="hidden items-center gap-1.5 rounded-lg bg-tf-teal px-3.5 py-2 text-[13px] font-semibold text-tf-navy transition-colors hover:bg-tf-teal/90 xl:inline-flex"
          >
            Start here
            <ArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
          </Link>
          <MobileMenu />
        </div>
      </div>
    </header>
  );
}