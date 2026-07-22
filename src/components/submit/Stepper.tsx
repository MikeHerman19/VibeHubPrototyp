import { Check } from "lucide-react";
import { cn } from "../../lib/cn";

// Horizontal step progress. `steps` are the labels for the active path; `current` is the index.
export function Stepper({ steps, current }: { steps: string[]; current: number }) {
  return (
    <ol className="mb-5 flex items-center gap-2">
      {steps.map((label, i) => {
        const done = i < current;
        const active = i === current;
        return (
          <li key={label} className="flex min-w-0 flex-1 items-center gap-2">
            <span
              className={cn(
                "grid h-6 w-6 shrink-0 place-items-center rounded-full text-xs font-semibold transition-colors",
                done && "bg-bayer-green text-bayer-blue-deep",
                active && "bg-bayer-blue text-white",
                !done && !active && "bg-surface text-text-muted"
              )}
            >
              {done ? <Check size={13} strokeWidth={3} /> : i + 1}
            </span>
            <span
              className={cn(
                "hidden truncate text-xs font-medium sm:block",
                active ? "text-bayer-blue" : "text-text-muted"
              )}
            >
              {label}
            </span>
            {i < steps.length - 1 && (
              <span className="mx-1 hidden h-px flex-1 bg-border-subtle sm:block" />
            )}
          </li>
        );
      })}
    </ol>
  );
}
