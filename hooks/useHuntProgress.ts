"use client";

import { useCallback, useEffect, useState } from "react";

export interface FoundEntry {
  foundAt: string;
  note?: string;
  photo?: string;
}

type Progress = Record<string, FoundEntry>;

const STORAGE_KEY = "leaf-hunt-progress-v1";

function loadProgress(): Progress {
  if (typeof window === "undefined") return {};
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    return raw ? (JSON.parse(raw) as Progress) : {};
  } catch {
    return {};
  }
}

export function useHuntProgress() {
  const [progress, setProgress] = useState<Progress>({});
  const [hydrated, setHydrated] = useState(false);

  // Reads localStorage (unavailable during SSR), so state must be hydrated
  // after mount rather than in the initializer to avoid a hydration mismatch.
  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setProgress(loadProgress());
    setHydrated(true);
  }, []);

  useEffect(() => {
    if (!hydrated) return;
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(progress));
  }, [progress, hydrated]);

  const markFound = useCallback((leafId: string, extra?: { note?: string; photo?: string }) => {
    setProgress((prev) => ({
      ...prev,
      [leafId]: {
        foundAt: prev[leafId]?.foundAt ?? new Date().toISOString(),
        note: extra?.note ?? prev[leafId]?.note,
        photo: extra?.photo ?? prev[leafId]?.photo,
      },
    }));
  }, []);

  const unmarkFound = useCallback((leafId: string) => {
    setProgress((prev) => {
      const next = { ...prev };
      delete next[leafId];
      return next;
    });
  }, []);

  const reset = useCallback(() => {
    setProgress({});
  }, []);

  return { progress, hydrated, markFound, unmarkFound, reset };
}
