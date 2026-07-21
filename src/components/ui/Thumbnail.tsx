import { cn } from "../../lib/cn";

/*
 * Abstract dark-navy app preview (spec §3, §5.5). No real screenshots — each `variant`
 * renders a different arrangement of Bayer "dynamic angle" shapes over the navy field,
 * so the gallery looks varied without an image pipeline.
 */
type Variant = "a" | "b" | "c";

export function Thumbnail({
  variant = "a",
  label,
  className,
}: {
  variant?: string;
  label?: string;
  className?: string;
}) {
  const v = (["a", "b", "c"].includes(variant) ? variant : "a") as Variant;
  return (
    <div
      className={cn(
        "relative overflow-hidden bg-thumb-navy",
        className
      )}
      aria-label={label ? `${label} preview` : "App preview"}
      role="img"
    >
      {/* Angled accent shapes — echo Bayer CI diagonals. */}
      {v === "a" && (
        <>
          <div className="absolute -right-10 -top-10 h-40 w-40 rotate-12 bg-bayer-capri/20 blur-2xl" />
          <div className="absolute bottom-0 left-0 h-1.5 w-2/3 -skew-y-1 bg-bayer-green/70" />
          <div className="absolute right-6 top-6 h-16 w-24 -skew-x-12 rounded-md border border-white/10 bg-white/5" />
        </>
      )}
      {v === "b" && (
        <>
          <div className="absolute -left-8 top-1/3 h-32 w-32 -rotate-6 bg-bayer-green/15 blur-2xl" />
          <div className="absolute left-6 top-6 h-2.5 w-24 rounded-full bg-bayer-capri/70" />
          <div className="absolute bottom-8 left-6 h-2 w-16 rounded-full bg-white/20" />
          <div className="absolute bottom-14 left-6 h-2 w-28 rounded-full bg-white/15" />
          <div className="absolute -bottom-6 right-0 h-24 w-1/2 skew-x-12 bg-bayer-blue/60" />
        </>
      )}
      {v === "c" && (
        <>
          <div className="absolute inset-0 bg-bayer-gradient opacity-15" />
          <div className="absolute right-8 top-8 h-14 w-14 rotate-45 border border-white/15" />
          <div className="absolute bottom-6 left-8 h-2 w-20 rounded-full bg-bayer-green/70" />
          <div className="absolute bottom-11 left-8 h-2 w-12 rounded-full bg-white/20" />
        </>
      )}
    </div>
  );
}
