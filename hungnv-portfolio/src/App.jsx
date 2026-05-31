import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import CourtroomShell from "./components/layout/CourtroomShell.jsx";
import { routes } from "./app/routes";

export default function App() {
  return (
    <BrowserRouter>
      <CourtroomShell>
        <Routes>
          {/* Default redirect to about */}
          <Route path="/" element={<Navigate to="/about" replace />} />
          
          {/* Map defined routes */}
          {routes.map((route) => (
            <Route
              key={route.path}
              path={route.path}
              element={route.element}
            />
          ))}

          {/* Fallback redirect */}
          <Route path="*" element={<Navigate to="/about" replace />} />
        </Routes>
      </CourtroomShell>
    </BrowserRouter>
  );
}
