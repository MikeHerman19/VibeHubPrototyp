import { createBrowserRouter } from "react-router-dom";
import { App } from "./App";
import { Gallery } from "./routes/Gallery";
import { AppDetail } from "./routes/AppDetail";
import { ComingSoon } from "./routes/ComingSoon";

// Routing (spec §2, §4): "/" = Gallery, "/app/:id" = App Detail; shared chrome via the
// layout route. Nav-only stubs (Connectors/Guidelines/About) render a "coming soon" page.
export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { index: true, element: <Gallery /> },
      { path: "app/:id", element: <AppDetail /> },
      { path: "connectors", element: <ComingSoon title="Connectors" /> },
      { path: "guidelines", element: <ComingSoon title="Guidelines" /> },
      { path: "about", element: <ComingSoon title="About" /> },
      { path: "*", element: <ComingSoon title="Not found" /> },
    ],
  },
]);
