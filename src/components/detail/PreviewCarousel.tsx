import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "../../lib/cn";
import { Thumbnail } from "../ui/Thumbnail";

/*
 * Preview carousel (spec §6.2): large preview with 2–3 mock screenshots on dark navy.
 * Screenshots are abstract gradient variants (no image pipeline).
 */
export function PreviewCarousel({
  screenshots,
  label,
}: {
  screenshots: string[];
  label: string;
}) {
  const [i, setI] = useState(0);
  const count = screenshots.length;
  const go = (delta: number) => setI((prev) => (prev + delta + count) % count);

  return (
    <div className="overflow-hidden rounded-2xl border border-border-subtle">
      <div className="relative aspect-[16/9] w-full">
        <Thumbnail
          variant={screenshots[i]}
          label={label}
          className="h-full w-full"
        />
        {count > 1 && (
          <>
            <button
              onClick={() => go(-1)}
              aria-label="Previous preview"
              className="absolute left-3 top-1/2 grid h-9 w-9 -translate-y-1/2 place-items-center rounded-full bg-black/30 text-white backdrop-blur transition-colors hover:bg-black/50"
            >
              <ChevronLeft size={18} />
            </button>
            <button
              onClick={() => go(1)}
              aria-label="Next preview"
              className="absolute right-3 top-1/2 grid h-9 w-9 -translate-y-1/2 place-items-center rounded-full bg-black/30 text-white backdrop-blur transition-colors hover:bg-black/50"
            >
              <ChevronRight size={18} />
            </button>
            <div className="absolute bottom-3 left-1/2 flex -translate-x-1/2 gap-1.5">
              {screenshots.map((s, idx) => (
                <button
                  key={s + idx}
                  onClick={() => setI(idx)}
                  aria-label={`Go to preview ${idx + 1}`}
                  className={cn(
                    "h-1.5 rounded-full transition-all",
                    idx === i ? "w-5 bg-white" : "w-1.5 bg-white/50"
                  )}
                />
              ))}
            </div>
          </>
        )}
      </div>
    </div>
  );
}
