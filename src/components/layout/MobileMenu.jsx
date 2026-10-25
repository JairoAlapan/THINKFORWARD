import { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import { Menu, ArrowRight } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetDescription,
  SheetTrigger,
} from "@/components/ui/sheet";
import { cn } from "@/lib/utils";
import { NAV_LINKS } from "@/data/navigation";
import LogoMark from "./LogoMark";

export default function MobileMenu() {
  const [open, setOpen] = useState(false);
  const close = () => setOpen(false);

  const itemClass = ({ isActive }) =>
    cn(
      "flex items-center gap-3 rounded-xl px-3 py-3 text-[15px] font-medium transition-colors",
      isActive ? "bg-white/10 text-white" : "text-slate-300 hover:bg-white/5 hover:text-white"
    );

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <button
          type="button"
          className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-white/15 text-white transition-colors hover:bg-white/10 lg:hidden"
          aria-label="Open navigation menu"
        >
          <Menu className="h-5 w-5" aria-hidden="true" />
        </button>
      </SheetTrigger>
      <SheetContent side="right" className="w-[88vw] max-w-sm overflow-y-auto border-white/10 bg-tf-navy p-0 text-white">
        <SheetHeader className="border-b border-white/10 px-5 py-4 text-left">
          <SheetTitle className="flex items-center gap-2.5 text-white">
            <LogoMark className="h-7 w-7" />
            <span>
              Think<span className="text-tf-teal">Forward</span>
            </span>
          </SheetTitle>
          <SheetDescription className="text-slate-400">Jump straight to any section.</SheetDescription>
        </SheetHeader>

        <nav aria-label="Mobile navigation" className="px-3 py-4">
          <ul className="space-y-1">
            <li>
              <NavLink to="/" end className={itemClass} onClick={close}>
                <span className="h-1.5 w-1.5 rounded-full bg-white/60" aria-hidden="true" />
                Home
              </NavLink>
            </li>
            {NAV_LINKS.map((link) => (
              <li key={link.path}>
                <NavLink to={link.path} className={itemClass} onClick={close}>
                  <span className={cn("h-1.5 w-1.5 rounded-full", link.dot)} aria-hidden="true" />
                  {link.label}
                </NavLink>
              </li>
            ))}
          </ul>

          <Link
            to="/computational-thinking"
            onClick={close}
            className="mt-4 flex items-center justify-center gap-2 rounded-xl bg-tf-teal px-4 py-3 text-[15px] font-semibold text-tf-navy"
          >
            Start exploring
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </Link>
          <p className="mt-4 px-1 text-xs leading-relaxed text-slate-400">
            No account needed. Anything you write stays in this browser.
          </p>
        </nav>
      </SheetContent>
    </Sheet>
  );
}