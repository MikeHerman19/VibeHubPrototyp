import { Plug } from "lucide-react";

// Connector chip (spec §6.4) — small pill with a plug glyph.
export function ConnectorChip({ name }: { name: string }) {
  return (
    <span className="inline-flex items-center gap-1.5 rounded-lg border border-border-subtle bg-surface px-2.5 py-1 text-xs font-medium text-text-primary">
      <Plug size={13} className="text-bayer-capri" />
      {name}
    </span>
  );
}
