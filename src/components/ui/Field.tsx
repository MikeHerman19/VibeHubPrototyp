import { useId, type ReactNode } from "react";

// Labeled text input. Wraps the recurring input recipe (see AssistantInput / SearchField) so
// the submit wizard doesn't repeat it per field. There is no shared Input primitive yet.
export function Field({
  label,
  value,
  onChange,
  placeholder,
  hint,
  type = "text",
}: {
  label: string;
  value: string;
  onChange: (v: string) => void;
  placeholder?: string;
  hint?: ReactNode;
  type?: string;
}) {
  const id = useId();
  return (
    <div className="flex flex-col gap-1.5">
      <label htmlFor={id} className="text-sm font-medium text-text-primary">
        {label}
      </label>
      <input
        id={id}
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className="rounded-lg border border-border-subtle bg-surface-card px-3 py-2 text-sm text-text-primary placeholder:text-text-muted focus:border-bayer-capri focus:outline-none"
      />
      {hint && <p className="text-xs text-text-muted">{hint}</p>}
    </div>
  );
}
