import type { ButtonHTMLAttributes, ReactNode } from "react";
import { cn } from "../../lib/cn";

type Variant = "primary" | "secondary" | "accent" | "ghost";
type Size = "sm" | "md";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: Variant;
  size?: Size;
  children: ReactNode;
};

// Button variants per spec §3: primary = Bayer blue fill; secondary = white/blue border;
// accent = green (e.g. "Launch app"); ghost = subtle text button.
const VARIANTS: Record<Variant, string> = {
  primary:
    "bg-bayer-blue text-white hover:bg-bayer-blue-deep border border-transparent",
  secondary:
    "bg-surface-card text-bayer-blue border border-bayer-blue/30 hover:border-bayer-blue hover:bg-bayer-blue/5",
  accent:
    "bg-bayer-green text-bayer-blue-deep font-semibold hover:brightness-95 border border-transparent",
  ghost:
    "bg-transparent text-text-muted hover:text-bayer-blue hover:bg-bayer-blue/5 border border-transparent",
};

const SIZES: Record<Size, string> = {
  sm: "text-xs px-3 py-1.5 gap-1.5",
  md: "text-sm px-4 py-2 gap-2",
};

export function Button({
  variant = "primary",
  size = "md",
  className,
  children,
  ...rest
}: ButtonProps) {
  return (
    <button
      className={cn(
        "inline-flex items-center justify-center rounded-lg font-medium",
        "transition-colors duration-150 cursor-pointer select-none",
        "disabled:opacity-50 disabled:cursor-not-allowed",
        VARIANTS[variant],
        SIZES[size],
        className
      )}
      {...rest}
    >
      {children}
    </button>
  );
}
