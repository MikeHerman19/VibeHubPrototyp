import type { ReactNode } from "react";
import { ExternalLink, Info } from "lucide-react";

// Instruction box with an outbound request link. Used when the user lacks a GitHub account
// or Azure subscription.
export function InfoCallout({
  children,
  linkLabel,
  href,
}: {
  children: ReactNode;
  linkLabel: string;
  href: string;
}) {
  return (
    <div className="mt-3 rounded-lg border border-bayer-capri/30 bg-bayer-capri/5 p-4">
      <div className="flex gap-2.5">
        <Info size={16} className="mt-0.5 shrink-0 text-bayer-capri" />
        <div className="min-w-0 text-sm text-text-primary">
          {children}
          <a
            href={href}
            target="_blank"
            rel="noreferrer"
            className="mt-2 inline-flex items-center gap-1.5 font-medium text-bayer-capri hover:underline"
          >
            {linkLabel}
            <ExternalLink size={13} />
          </a>
        </div>
      </div>
    </div>
  );
}
