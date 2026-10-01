"use client";

import { useRef, useState } from "react";
import { LeafIcon } from "./LeafIcon";
import { resizeImageFile } from "@/lib/image";
import { LeafTarget, RARITY_POINTS } from "@/lib/leaves";
import type { FoundEntry } from "@/hooks/useHuntProgress";

const RARITY_LABEL: Record<LeafTarget["rarity"], string> = {
  common: "Common",
  uncommon: "Uncommon",
  rare: "Rare",
};

const RARITY_BADGE: Record<LeafTarget["rarity"], string> = {
  common: "bg-emerald-100 text-emerald-700 dark:bg-emerald-900/40 dark:text-emerald-300",
  uncommon: "bg-amber-100 text-amber-700 dark:bg-amber-900/40 dark:text-amber-300",
  rare: "bg-rose-100 text-rose-700 dark:bg-rose-900/40 dark:text-rose-300",
};

export function LeafCard({
  leaf,
  entry,
  spotlighted,
  onMarkFound,
  onUnmarkFound,
}: {
  leaf: LeafTarget;
  entry?: FoundEntry;
  spotlighted?: boolean;
  onMarkFound: (leafId: string, extra?: { note?: string; photo?: string }) => void;
  onUnmarkFound: (leafId: string) => void;
}) {
  const [expanded, setExpanded] = useState(false);
  const [note, setNote] = useState(entry?.note ?? "");
  const fileInputRef = useRef<HTMLInputElement>(null);
  const found = Boolean(entry);

  async function handlePhoto(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0];
    if (!file) return;
    const dataUrl = await resizeImageFile(file);
    onMarkFound(leaf.id, { photo: dataUrl, note });
  }

  return (
    <div
      className={`rounded-2xl border p-4 transition-all ${
        spotlighted
          ? "border-emerald-500 ring-2 ring-emerald-400/60"
          : "border-zinc-200 dark:border-zinc-800"
      } ${found ? "bg-emerald-50/60 dark:bg-emerald-950/20" : "bg-white dark:bg-zinc-900"}`}
    >
      <button
        type="button"
        onClick={() => setExpanded((v) => !v)}
        className="flex w-full items-center gap-3 text-left"
      >
        <div className="relative h-10 w-10 shrink-0">
          <LeafIcon color={leaf.color} className="h-10 w-10" />
          {found && (
            <span className="absolute -right-1 -top-1 flex h-5 w-5 items-center justify-center rounded-full bg-emerald-600 text-[10px] text-white">
              ✓
            </span>
          )}
        </div>
        <div className="flex-1">
          <div className="flex items-center gap-2">
            <span className="font-medium text-zinc-900 dark:text-zinc-100">
              {leaf.commonName}
            </span>
            <span className={`rounded-full px-2 py-0.5 text-xs font-medium ${RARITY_BADGE[leaf.rarity]}`}>
              {RARITY_LABEL[leaf.rarity]} · {RARITY_POINTS[leaf.rarity]} pts
            </span>
          </div>
          <span className="text-sm italic text-zinc-500 dark:text-zinc-400">
            {leaf.scientificName}
          </span>
        </div>
        <span className="text-zinc-400">{expanded ? "−" : "+"}</span>
      </button>

      {expanded && (
        <div className="mt-3 space-y-3 border-t border-zinc-100 pt-3 text-sm dark:border-zinc-800">
          <p className="text-zinc-600 dark:text-zinc-400">
            <span className="font-medium text-zinc-800 dark:text-zinc-200">Hint: </span>
            {leaf.hint}
          </p>
          <p className="text-zinc-600 dark:text-zinc-400">
            <span className="font-medium text-zinc-800 dark:text-zinc-200">Fun fact: </span>
            {leaf.funFact}
          </p>

          {found ? (
            <div className="space-y-2">
              <p className="text-xs text-emerald-700 dark:text-emerald-400">
                Found {new Date(entry!.foundAt).toLocaleString()}
              </p>
              {entry?.photo && (
                // eslint-disable-next-line @next/next/no-img-element
                <img
                  src={entry.photo}
                  alt={`Your photo of a ${leaf.commonName} leaf`}
                  className="h-28 w-28 rounded-lg object-cover"
                />
              )}
              <textarea
                value={note}
                onChange={(e) => setNote(e.target.value)}
                onBlur={() => onMarkFound(leaf.id, { note })}
                placeholder="Where did you find it? Add a note…"
                className="w-full resize-none rounded-lg border border-zinc-200 bg-transparent p-2 text-sm dark:border-zinc-700"
                rows={2}
              />
              <div className="flex gap-2">
                <button
                  type="button"
                  onClick={() => fileInputRef.current?.click()}
                  className="rounded-full border border-zinc-300 px-3 py-1 text-xs font-medium hover:bg-zinc-50 dark:border-zinc-700 dark:hover:bg-zinc-800"
                >
                  {entry?.photo ? "Replace photo" : "Add photo"}
                </button>
                <button
                  type="button"
                  onClick={() => onUnmarkFound(leaf.id)}
                  className="rounded-full border border-zinc-300 px-3 py-1 text-xs font-medium text-zinc-500 hover:bg-zinc-50 dark:border-zinc-700 dark:hover:bg-zinc-800"
                >
                  Undo
                </button>
                <input
                  ref={fileInputRef}
                  type="file"
                  accept="image/*"
                  capture="environment"
                  onChange={handlePhoto}
                  className="hidden"
                />
              </div>
            </div>
          ) : (
            <button
              type="button"
              onClick={() => onMarkFound(leaf.id)}
              className="w-full rounded-full bg-emerald-600 px-4 py-2 text-sm font-medium text-white hover:bg-emerald-700"
            >
              I found it!
            </button>
          )}
        </div>
      )}
    </div>
  );
}
