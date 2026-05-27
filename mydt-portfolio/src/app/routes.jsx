// src/app/routes.jsx
import React, { createContext, useContext, useState, useEffect } from "react";

const RouterContext = createContext();

export function RouterProvider({ children }) {
  // Read current path and default to /about
  const [currentPath, setCurrentPath] = useState(() => {
    const path = window.location.pathname;
    // Check if it's one of our valid routes, otherwise fallback to /about
    if (["/about", "/projects", "/conclusion"].includes(path)) {
      return path;
    }
    return "/about";
  });

  useEffect(() => {
    const handlePopState = () => {
      const path = window.location.pathname;
      if (["/about", "/projects", "/conclusion"].includes(path)) {
        setCurrentPath(path);
      } else {
        setCurrentPath("/about");
      }
    };

    window.addEventListener("popstate", handlePopState);
    return () => window.removeEventListener("popstate", handlePopState);
  }, []);

  const navigate = (path) => {
    if (window.location.pathname !== path) {
      window.history.pushState(null, "", path);
      setCurrentPath(path);
      // Fire custom route-change event so that Lenis scroll resets
      window.dispatchEvent(new Event("route-change"));
    }
  };

  return (
    <RouterContext.Provider value={{ currentPath, navigate }}>
      {children}
    </RouterContext.Provider>
  );
}

export function useRouter() {
  return useContext(RouterContext);
}

export function Link({ to, children, className, activeClassName = "", ...props }) {
  const { currentPath, navigate } = useRouter();
  const isActive = currentPath === to;

  const handleClick = (e) => {
    e.preventDefault();
    navigate(to);
  };

  return (
    <a
      href={to}
      onClick={handleClick}
      className={`${className} ${isActive ? activeClassName : ""}`}
      {...props}
    >
      {children}
    </a>
  );
}
