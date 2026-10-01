"use client";

import { useCallback, useEffect, useState } from "react";

type Found = Record<string, string>;

const STORAGE_KEY = "gr-leaf-hunt-v1";

function load(): Found {
  if (typeof window === "undefined") return {};
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    return raw ? (JSON.parse(raw) as Found) : {};
  } catch {
    return {};
  }
}

export function useFoundLeaves() {
  const [found, setFound] = useState<Found>({});
  const [hydrated, setHydrated] = useState(false);

  // Reads localStorage (unavailable during SSR), so state must be hydrated
  // after mount rather than in the initializer to avoid a hydration mismatch.
  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setFound(load());
    setHydrated(true);
  }, []);

  useEffect(() => {
    if (!hydrated) return;
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(found));
  }, [found, hydrated]);

  const toggle = useCallback((leafId: string) => {
    setFound((prev) => {
      const next = { ...prev };
      if (next[leafId]) {
        delete next[leafId];
      } else {
        next[leafId] = new Date().toLocaleDateString(undefined, { month: "short", day: "numeric" });
      }
      return next;
    });
  }, []);

  const reset = useCallback(() => setFound({}), []);

  return { found, toggle, reset };
}
