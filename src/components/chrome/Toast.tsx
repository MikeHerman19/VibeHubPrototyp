import { X } from "lucide-react";
import { useToast } from "../../lib/ToastContext";

// Toast viewport — bottom-center stack. Rendered once in the layout (spec §9).
export function ToastHost() {
  const { toasts, dismiss } = useToast();
  return (
    <div className="pointer-events-none fixed bottom-6 left-1/2 z-50 flex -translate-x-1/2 flex-col items-center gap-2">
      {toasts.map((t) => (
        <div
          key={t.id}
          role="status"
          className="pointer-events-auto flex items-center gap-3 rounded-xl border border-border-subtle bg-bayer-blue px-4 py-2.5 text-sm text-white shadow-lg shadow-bayer-blue/20"
        >
          <span>{t.message}</span>
          <button
            onClick={() => dismiss(t.id)}
            aria-label="Dismiss"
            className="rounded-md p-0.5 text-white/70 hover:bg-white/10 hover:text-white"
          >
            <X size={14} />
          </button>
        </div>
      ))}
    </div>
  );
}
