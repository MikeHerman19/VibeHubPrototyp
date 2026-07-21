import { useState } from "react";
import { SendHorizontal } from "lucide-react";

// Assistant input (spec §7): text field + send. Submits on Enter or button click.
export function AssistantInput({
  disabled,
  onSend,
}: {
  disabled: boolean;
  onSend: (text: string) => void;
}) {
  const [value, setValue] = useState("");

  const submit = () => {
    const text = value.trim();
    if (!text || disabled) return;
    onSend(text);
    setValue("");
  };

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        submit();
      }}
      className="flex items-center gap-2 border-t border-border-subtle bg-surface-card p-3"
    >
      <input
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder="Ask about an app in the hub…"
        className="min-w-0 flex-1 rounded-lg border border-border-subtle bg-surface px-3 py-2 text-sm text-text-primary placeholder:text-text-muted focus:border-bayer-capri focus:outline-none"
      />
      <button
        type="submit"
        disabled={disabled || !value.trim()}
        aria-label="Send"
        className="grid h-9 w-9 shrink-0 place-items-center rounded-lg bg-bayer-blue text-white transition-colors hover:bg-bayer-blue-deep disabled:opacity-40"
      >
        <SendHorizontal size={16} />
      </button>
    </form>
  );
}
