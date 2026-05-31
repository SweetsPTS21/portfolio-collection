import SunCovePage from "../pages/SunCovePage.jsx";
import OceanLogsPage from "../pages/OceanLogsPage.jsx";
import ShellMailPage from "../pages/ShellMailPage.jsx";

export const routes = [
  {
    path: "/",
    label: "Sun Cove",
    shortLabel: "01",
    element: SunCovePage,
  },
  {
    path: "/logs",
    label: "Ocean Logs",
    shortLabel: "02",
    element: OceanLogsPage,
  },
  {
    path: "/beacon",
    label: "Shell Mail",
    shortLabel: "03",
    element: ShellMailPage,
  },
];
