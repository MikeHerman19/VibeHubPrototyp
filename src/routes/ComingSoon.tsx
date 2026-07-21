import { Link } from "react-router-dom";
import { Sparkles } from "lucide-react";
import { Button } from "../components/ui/Button";

// Lightweight placeholder for nav items that are out of scope for the mockup (spec §11).
export function ComingSoon({ title }: { title: string }) {
  return (
    <div className="grid min-h-[60vh] place-items-center">
      <div className="max-w-md text-center">
        <div className="mx-auto mb-4 grid h-14 w-14 place-items-center rounded-2xl bg-bayer-blue/5 text-bayer-blue">
          <Sparkles size={26} />
        </div>
        <h1 className="text-2xl font-bold text-bayer-blue">{title}</h1>
        <p className="mt-2 text-sm text-text-muted">
          This section is part of the Vibe Hub vision but isn't built in this demo. The
          Apps gallery is the live surface — head back to explore it.
        </p>
        <Link to="/" className="mt-6 inline-block">
          <Button variant="secondary">← Back to gallery</Button>
        </Link>
      </div>
    </div>
  );
}
