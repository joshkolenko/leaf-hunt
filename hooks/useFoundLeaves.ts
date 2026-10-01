"use client";

import { useCallback } from "react";
import { usePersistedState } from "@/hooks/usePersistedState";

type RegionFound = Record<string, string>;
type AllFound = Record<string, RegionFound>;

const STORAGE_KEY = "leaf-hunt-progress-v1";

export function useFoundLeaves() {
  const [all, setAll] = usePersistedState<AllFound>(STORAGE_KEY, {});

  const getFound = useCallback((regionId: string): RegionFound => all[regionId] ?? {}, [all]);

  const toggle = useCallback(
    (regionId: string, leafId: string) => {
      setAll((prev) => {
        const regionFound = { ...(prev[regionId] ?? {}) };
        if (regionFound[leafId]) {
          delete regionFound[leafId];
        } else {
          regionFound[leafId] = new Date().toLocaleDateString(undefined, { month: "short", day: "numeric" });
        }
        return { ...prev, [regionId]: regionFound };
      });
    },
    [setAll],
  );

  const reset = useCallback(
    (regionId: string) => {
      setAll((prev) => ({ ...prev, [regionId]: {} }));
    },
    [setAll],
  );

  return { getFound, toggle, reset };
}
