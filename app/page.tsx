"use client";

import { useMemo, useState } from "react";
import { LeafCard } from "@/components/LeafCard";
import { ProgressBar } from "@/components/ProgressBar";
import { useHuntProgress } from "@/hooks/useHuntProgress";
import { LEAVES, RARITY_POINTS, totalPossiblePoints } from "@/lib/leaves";

export default function Home() {
  const { progress, hydrated, markFound, unmarkFound, reset } = useHuntProgress();
  const [spotlightId, setSpotlightId] = useState<string | null>(null);

  const foundCount = Object.keys(progress).length;
  const totalCount = LEAVES.length;
  const score = useMemo(
    () =>
      LEAVES.reduce(
        (sum, leaf) => (progress[leaf.id] ? sum + RARITY_POINTS[leaf.rarity] : sum),
        0,
      ),
    [progress],
  );
  const totalScore = totalPossiblePoints();
  const complete = hydrated && foundCount === totalCount;

  function pickNextTarget() {
    const remaining = LEAVES.filter((leaf) => !progress[leaf.id]);
    if (remaining.length === 0) return;
    const pick = remaining[Math.floor(Math.random() * remaining.length)];
    setSpotlightId(pick.id);
    document.getElementById(`leaf-${pick.id}`)?.scrollIntoView({
      behavior: "smooth",
      block: "center",
    });
  }

  function handleReset() {
    if (window.confirm("Clear all progress and start the hunt over?")) {
      reset();
      setSpotlightId(null);
    }
  }

  return (
    <div className="min-h-full bg-zinc-50 dark:bg-black">
      <main className="mx-auto w-full max-w-3xl px-4 py-10 sm:px-6">
        <header className="mb-8 text-center">
          <h1 className="text-3xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50">
            🍂 Leaf Hunt
          </h1>
          <p className="mt-2 text-zinc-600 dark:text-zinc-400">
            Head outside and track down every leaf on the list. Tap a card for hints, then
            mark it found.
          </p>
        </header>

        <div className="sticky top-4 z-10 mb-6 rounded-2xl border border-zinc-200 bg-white/90 p-4 shadow-sm backdrop-blur dark:border-zinc-800 dark:bg-zinc-900/90">
          <ProgressBar
            foundCount={foundCount}
            totalCount={totalCount}
            score={score}
            totalScore={totalScore}
          />
          <div className="mt-3 flex gap-2">
            <button
              type="button"
              onClick={pickNextTarget}
              disabled={complete}
              className="flex-1 rounded-full bg-zinc-900 px-4 py-2 text-sm font-medium text-white hover:bg-zinc-700 disabled:cursor-not-allowed disabled:opacity-40 dark:bg-zinc-100 dark:text-zinc-900 dark:hover:bg-zinc-300"
            >
              Pick my next target
            </button>
            <button
              type="button"
              onClick={handleReset}
              className="rounded-full border border-zinc-300 px-4 py-2 text-sm font-medium text-zinc-600 hover:bg-zinc-100 dark:border-zinc-700 dark:text-zinc-400 dark:hover:bg-zinc-800"
            >
              Reset
            </button>
          </div>
        </div>

        {complete && (
          <div className="mb-6 rounded-2xl bg-emerald-600 p-4 text-center text-white">
            🎉 Hunt complete! You found every leaf for {score} points.
          </div>
        )}

        <div className="space-y-3">
          {LEAVES.map((leaf) => (
            <div key={leaf.id} id={`leaf-${leaf.id}`}>
              <LeafCard
                leaf={leaf}
                entry={progress[leaf.id]}
                spotlighted={spotlightId === leaf.id}
                onMarkFound={markFound}
                onUnmarkFound={unmarkFound}
              />
            </div>
          ))}
        </div>

        <footer className="mt-10 text-center text-xs text-zinc-400">
          Progress is saved in your browser, only on this device.
        </footer>
      </main>
    </div>
  );
}
