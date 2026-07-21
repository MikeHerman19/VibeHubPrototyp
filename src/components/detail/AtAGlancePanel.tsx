import { Cpu, KeyRound, CalendarClock, ServerCog } from "lucide-react";
import type { App } from "../../data/types";
import type { ReactNode } from "react";
import { OwnerBlock } from "./OwnerBlock";
import { ConnectorChip } from "./ConnectorChip";

// "At a glance" info panel (spec §6.4): owners, tech stack, connectors, auth, environment, updated.
export function AtAGlancePanel({ app }: { app: App }) {
  const updated = new Date(app.updated).toLocaleDateString("en-GB", {
    day: "numeric",
    month: "short",
    year: "numeric",
  });

  return (
    <div className="flex flex-col gap-5 rounded-2xl border border-border-subtle bg-surface-card p-5">
      <h3 className="text-sm font-semibold uppercase tracking-wider text-text-muted">
        At a glance
      </h3>

      <Row label="Reach out to">
        <OwnerBlock owners={app.owners} />
      </Row>

      <Divider />

      <Row label="Tech stack" icon={<Cpu size={15} />}>
        <dl className="grid grid-cols-[auto_1fr] gap-x-3 gap-y-1 text-sm">
          <dt className="text-text-muted">Frontend</dt>
          <dd className="text-text-primary">{app.tech.frontend}</dd>
          <dt className="text-text-muted">Backend</dt>
          <dd className="text-text-primary">{app.tech.backend}</dd>
          <dt className="text-text-muted">Hosting</dt>
          <dd className="text-text-primary">{app.tech.hosting}</dd>
        </dl>
      </Row>

      <Divider />

      <Row label="Data connectors">
        <div className="flex flex-wrap gap-2">
          {app.connectors.map((c) => (
            <ConnectorChip key={c} name={c} />
          ))}
        </div>
      </Row>

      <Divider />

      <Row label="Authentication" icon={<KeyRound size={15} />}>
        <span className="text-sm text-text-primary">{app.auth}</span>
      </Row>

      <Divider />

      <Row label="Environment" icon={<ServerCog size={15} />}>
        <span className="text-sm text-text-primary">{app.environment}</span>
      </Row>

      <Divider />

      <Row label="Last updated" icon={<CalendarClock size={15} />}>
        <span className="text-sm text-text-primary">{updated}</span>
      </Row>
    </div>
  );
}

function Row({
  label,
  icon,
  children,
}: {
  label: string;
  icon?: ReactNode;
  children: ReactNode;
}) {
  return (
    <div>
      <div className="mb-2 flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wide text-text-muted">
        {icon && <span className="text-bayer-capri">{icon}</span>}
        {label}
      </div>
      {children}
    </div>
  );
}

function Divider() {
  return <div className="h-px bg-border-subtle" />;
}
