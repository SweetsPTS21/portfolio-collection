import { useLocation, useRoutes } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import { appRoutes } from "./app/routes";
import { useLenis } from "./app/lenisSetup";
import { AppShell } from "./components/layout/AppShell";

export default function App() {
  const location = useLocation();
  const element = useRoutes(appRoutes, location);

  useLenis(location.pathname);

  return (
    <AppShell>
      <AnimatePresence mode="wait" initial={false}>
        <div key={location.pathname}>{element}</div>
      </AnimatePresence>
    </AppShell>
  );
}
