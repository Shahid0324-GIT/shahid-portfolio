"use client";

import { useEffect, useState } from "react";
import { useTheme } from "next-themes";

export function useIsDark(): boolean {
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setMounted(true);
  }, []);

  // Before mount: always false so SSR and client agree.
  // After mount:  reflect the real resolved theme.
  return mounted ? resolvedTheme === "dark" : false;
}
