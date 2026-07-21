import type { Owner } from "../../data/types";
import { cn } from "../../lib/cn";

// Deterministic tint per owner so avatars are colorful but stable across renders.
const TINTS = [
  "bg-bayer-blue text-white",
  "bg-bayer-capri text-bayer-blue-deep",
  "bg-bayer-green text-bayer-blue-deep",
  "bg-bayer-blue-deep text-white",
];

function tintFor(initials: string): string {
  const sum = initials
    .split("")
    .reduce((acc, ch) => acc + ch.charCodeAt(0), 0);
  return TINTS[sum % TINTS.length];
}

export function Avatar({
  owner,
  size = "md",
  className,
}: {
  owner: Owner;
  size?: "sm" | "md";
  className?: string;
}) {
  const dims = size === "sm" ? "h-6 w-6 text-[10px]" : "h-8 w-8 text-xs";
  return (
    <span
      title={owner.name}
      className={cn(
        "inline-flex items-center justify-center rounded-full font-semibold",
        "ring-2 ring-surface-card",
        dims,
        tintFor(owner.initials),
        className
      )}
    >
      {owner.initials}
    </span>
  );
}

// Overlapping avatar cluster (spec §5.5 footer, §6.4).
export function AvatarStack({
  owners,
  size = "md",
}: {
  owners: Owner[];
  size?: "sm" | "md";
}) {
  return (
    <span className="flex items-center -space-x-2">
      {owners.map((o) => (
        <Avatar key={o.initials + o.name} owner={o} size={size} />
      ))}
    </span>
  );
}
