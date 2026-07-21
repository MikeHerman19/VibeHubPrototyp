import type { Owner } from "../../data/types";
import { Avatar } from "../ui/Avatar";

// Owner row (spec §6.4): avatar + name + role. Used in the "at a glance" panel.
export function OwnerBlock({ owners }: { owners: Owner[] }) {
  return (
    <ul className="flex flex-col gap-3">
      {owners.map((o) => (
        <li key={o.initials + o.name} className="flex items-center gap-3">
          <Avatar owner={o} />
          <div className="leading-tight">
            <div className="text-sm font-medium text-text-primary">{o.name}</div>
            {o.role && <div className="text-xs text-text-muted">{o.role}</div>}
          </div>
        </li>
      ))}
    </ul>
  );
}
