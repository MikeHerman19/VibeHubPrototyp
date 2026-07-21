import { NavLink } from "react-router-dom";
import { cn } from "../../lib/cn";

/*
 * PLACEHOLDER LOGO (spec §5.1, §11): this is a generic cross-style mark, NOT the official
 * Bayer Cross. Do not ship this to production — swap in the real asset from Bayer's brand
 * portal before any client-facing use.
 */
function PlaceholderBayerMark() {
  return (
    <div
      className="grid h-9 w-9 place-items-center rounded-full bg-bayer-blue text-white"
      title="Placeholder mark — replace with official Bayer Cross"
    >
      <svg viewBox="0 0 24 24" className="h-5 w-5" aria-hidden="true">
        <path
          d="M12 3v18M3 12h18M6 6l12 12M18 6L6 18"
          stroke="currentColor"
          strokeWidth="1.6"
          fill="none"
          strokeLinecap="round"
          opacity="0.9"
        />
      </svg>
    </div>
  );
}

const NAV = [
  { label: "Apps", to: "/", end: true },
  { label: "Connectors", to: "/connectors" },
  { label: "Guidelines", to: "/guidelines" },
  { label: "About", to: "/about" },
];

export function TopBar() {
  return (
    <header className="sticky top-0 z-40 border-b border-border-subtle bg-surface-card/90 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-[1440px] items-center gap-6 px-6">
        {/* Logo lockup */}
        <NavLink to="/" className="flex items-center gap-3">
          <PlaceholderBayerMark />
          <div className="leading-tight">
            <div className="text-lg font-bold text-bayer-blue">Vibe Hub</div>
            <div className="text-[10px] font-semibold uppercase tracking-widest text-text-muted">
              onePSS
            </div>
          </div>
        </NavLink>

        {/* Center nav */}
        <nav className="ml-6 hidden items-center gap-1 md:flex">
          {NAV.map((item) => (
            <NavLink
              key={item.label}
              to={item.to}
              end={item.end}
              className={({ isActive }) =>
                cn(
                  "rounded-lg px-3 py-2 text-sm font-medium transition-colors",
                  isActive
                    ? "bg-bayer-blue/5 text-bayer-blue"
                    : "text-text-muted hover:text-bayer-blue"
                )
              }
            >
              {item.label}
            </NavLink>
          ))}
        </nav>

        <div className="ml-auto flex items-center gap-4">
          {/* User avatar */}
          <div
            className="grid h-9 w-9 place-items-center rounded-full bg-bayer-blue-deep text-xs font-semibold text-white"
            title="Signed in (demo)"
          >
            MH
          </div>
        </div>
      </div>
    </header>
  );
}
