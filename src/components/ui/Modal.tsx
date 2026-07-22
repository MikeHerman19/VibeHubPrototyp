import { useEffect, useRef, type ReactNode } from "react";
import { X } from "lucide-react";

/*
 * First real dialog shell in the app (prototype had no modal — CTAs resolved to toasts).
 * Follows the toast pattern: fixed viewport overlay at z-50, mounted where used. Backdrop
 * click + Esc close; focus moves into the panel on open. No portal — a fixed inset-0 wrapper
 * escapes the layout grid on its own.
 */
export function Modal({
  open,
  onClose,
  title,
  subtitle,
  children,
  footer,
}: {
  open: boolean;
  onClose: () => void;
  title: string;
  subtitle?: string;
  children: ReactNode;
  footer?: ReactNode;
}) {
  const panelRef = useRef<HTMLDivElement>(null);

  // Esc to close.
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, onClose]);

  // Move focus into the dialog when it opens.
  useEffect(() => {
    if (open) panelRef.current?.focus();
  }, [open]);

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-start justify-center overflow-y-auto bg-bayer-blue-deep/50 p-4 sm:p-6"
      onClick={onClose}
    >
      <div
        ref={panelRef}
        role="dialog"
        aria-modal="true"
        aria-label={title}
        tabIndex={-1}
        onClick={(e) => e.stopPropagation()}
        className="my-auto w-full max-w-[640px] rounded-[12px] border border-border-subtle bg-surface-card shadow-lg outline-none"
      >
        {/* Header */}
        <div className="flex items-start justify-between gap-4 border-b border-border-subtle px-6 py-4">
          <div>
            <h2 className="text-lg font-bold leading-tight text-bayer-blue">{title}</h2>
            {subtitle && <p className="mt-0.5 text-sm text-text-muted">{subtitle}</p>}
          </div>
          <button
            onClick={onClose}
            aria-label="Close"
            className="-mr-1 rounded-md p-1 text-text-muted transition-colors hover:bg-bayer-blue/5 hover:text-bayer-blue"
          >
            <X size={18} />
          </button>
        </div>

        {/* Body */}
        <div className="px-6 py-5">{children}</div>

        {/* Footer */}
        {footer && (
          <div className="flex items-center justify-between gap-3 border-t border-border-subtle px-6 py-4">
            {footer}
          </div>
        )}
      </div>
    </div>
  );
}
