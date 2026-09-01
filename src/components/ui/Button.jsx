import { forwardRef } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { cn } from "../../lib/cn.js";

const VARIANTS = {
  brand: "bg-brand text-white border-brand hover:bg-brand-600 hover:border-brand-600",
  wa: "bg-wa text-white border-wa hover:bg-wa-600 hover:border-wa-600",
  accent:
    "bg-accent text-[#3a2a06] border-accent hover:bg-accent-600 hover:border-accent-600",
  ghost:
    "bg-transparent text-ink border-line-strong hover:bg-ink hover:text-white hover:border-ink",
  ghostLight:
    "bg-transparent text-white border-white/40 hover:bg-white hover:text-ink hover:border-white",
};

const SIZES = {
  sm: "px-4 py-2.5 text-sm",
  md: "px-6 py-3.5 text-[0.98rem]",
  lg: "px-7 py-4 text-[1.05rem]",
};

const base =
  "inline-flex items-center justify-center gap-2 rounded-full border-[1.5px] font-semibold leading-none " +
  "transition-colors duration-200 shadow-none hover:shadow-md2 focus-visible:outline-offset-4";

const Button = forwardRef(function Button(
  { as, to, href, variant = "brand", size = "md", className, children, ...props },
  ref
) {
  const classes = cn(base, VARIANTS[variant], SIZES[size], className);
  const motionProps = {
    whileHover: { y: -2 },
    whileTap: { y: 0 },
    transition: { type: "spring", stiffness: 400, damping: 22 },
  };

  if (to) {
    return (
      <motion.div {...motionProps} className="inline-flex">
        <Link ref={ref} to={to} className={classes} {...props}>
          {children}
        </Link>
      </motion.div>
    );
  }

  if (href) {
    return (
      <motion.a
        ref={ref}
        href={href}
        target={props.target ?? "_blank"}
        rel="noopener noreferrer"
        className={classes}
        {...motionProps}
        {...props}
      >
        {children}
      </motion.a>
    );
  }

  return (
    <motion.button ref={ref} className={classes} {...motionProps} {...props}>
      {children}
    </motion.button>
  );
});

export default Button;
