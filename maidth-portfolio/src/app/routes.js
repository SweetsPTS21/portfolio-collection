export const routes = [
  { path: "/about", label: "Giới thiệu", page: "about" },
  { path: "/projects", label: "Dự án", page: "projects" },
  { path: "/conclution", label: "Tổng kết", page: "conclution" },
];

export function normalizePath(pathname) {
  return routes.some((route) => route.path === pathname) ? pathname : "/about";
}

