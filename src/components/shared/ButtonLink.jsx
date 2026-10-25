import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";

const VARIANTS = {
  primary: "bg-tf-teal text-tf-navy hover:bg-tf-teal/90 shadow-lg shadow-tf-teal/25",
  onDark: "border border-white/25 bg-white/5 text-white hover:border-white/40 hover:bg-white/10",
  ink: "bg-tf-navy text-white hover:bg-tf-navy-700",
  ghost: "border border-slate-300 bg-white text-tf-navy hover:border-slate-400 hover:bg-slate-50",
};

export default function ButtonLink({ to, href, variant = "primary", className, children, ...props }) {
  const classes = cn(
    "inline-flex items-center justify-center gap-2 rounded-xl px-5 py-3 text-[15px] font-semibold transition-colors",
    VARIANTS[variant],
    className
  );

  if (href) {
    return (
      <a href={href} className={classes} {...props}>
        {children}
      </a>
    );
  }

  return (
    <Link to={to} className={classes} {...props}>
      {children}
    </Link>
  );
}