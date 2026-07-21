import { Search } from "lucide-react";

export function SearchField({
  value,
  onChange,
}: {
  value: string;
  onChange: (v: string) => void;
}) {
  return (
    <div className="relative">
      <Search
        size={16}
        className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-text-muted"
      />
      <input
        type="search"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder="Search by name, owner, or tag…"
        className="w-64 rounded-lg border border-border-subtle bg-surface-card py-2 pl-9 pr-3 text-sm text-text-primary placeholder:text-text-muted focus:border-bayer-capri focus:outline-none"
      />
    </div>
  );
}
