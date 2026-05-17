import { useEffect } from "react";
import { createLenis } from "../app/lenisSetup.js";

export function useLenis() {
  useEffect(() => {
    const instance = createLenis();
    return () => instance?.destroy();
  }, []);
}
