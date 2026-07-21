import { Outlet } from "react-router-dom";
import { ToastProvider } from "./lib/ToastContext";
import { TopBar } from "./components/chrome/TopBar";
import { ToastHost } from "./components/chrome/Toast";
import { AssistantPanel } from "./components/assistant/AssistantPanel";

/*
 * Layout route (spec §4): global chrome (top bar + assistant panel) persists across both
 * routes; only the main column swaps via <Outlet/>. Body is a two-column grid — main
 * content (~72%) + collapsible AI assistant rail (~28%).
 */
export function App() {
  return (
    <ToastProvider>
      <div className="min-h-screen bg-surface">
        <TopBar />
        <div className="mx-auto flex max-w-[1440px] gap-6 px-6 py-6">
          <main className="min-w-0 flex-1">
            <Outlet />
          </main>
          <AssistantPanel />
        </div>
        <ToastHost />
      </div>
    </ToastProvider>
  );
}
