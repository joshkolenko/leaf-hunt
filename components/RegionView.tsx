"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { LeafIcon } from "@/components/LeafIcon";
import { useFoundLeaves } from "@/hooks/useFoundLeaves";
import { maxPoints, Region, REGIONS } from "@/lib/regions";

const RANK_FRACTIONS: [number, string][] = [
  [0, "Sapling"],
  [0.17, "Leaf Peeper"],
  [0.4, "Trail Botanist"],
  [0.67, "Grand River Ranger"],
  [0.93, "Master of the Canopy"],
];

const FILTERS: { id: string; label: string }[] = [
  { id: "all", label: "All" },
  { id: "left", label: "Still hunting" },
  { id: "got", label: "Found" },
  { id: "1", label: "Easy · 1 pt" },
  { id: "2", label: "Medium · 2 pts" },
  { id: "3", label: "Trophy · 3 pts" },
];

function ResetButton({ onConfirm }: { onConfirm: () => void }) {
  const [armed, setArmed] = useState(false);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, []);

  function handleClick() {
    if (!armed) {
      setArmed(true);
      timeoutRef.current = setTimeout(() => setArmed(false), 3000);
      return;
    }
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setArmed(false);
    onConfirm();
  }

  return (
    <button type="button" className="reset" onClick={handleClick}>
      {armed ? "Tap again to clear all" : "Start over"}
    </button>
  );
}

export function RegionView({ region }: { region: Region }) {
  const { getFound, toggle, reset } = useFoundLeaves();
  const found = getFound(region.id);
  const [filter, setFilter] = useState("all");

  const regionMax = maxPoints(region.leaves);
  const foundCount = Object.keys(found).length;
  const foundPts = region.leaves
    .filter((leaf) => found[leaf.id])
    .reduce((sum, leaf) => sum + leaf.pts, 0);

  let rank = RANK_FRACTIONS[0][1];
  for (const [frac, name] of RANK_FRACTIONS) {
    if (foundPts >= frac * regionMax) rank = name;
  }
  if (foundCount === region.leaves.length) rank = "Full herbarium. Legend.";

  const visible = region.leaves.filter((leaf) => {
    const got = Boolean(found[leaf.id]);
    if (filter === "left" && got) return false;
    if (filter === "got" && !got) return false;
    if (["1", "2", "3"].includes(filter) && String(leaf.pts) !== filter) return false;
    return true;
  });

  return (
    <div className="wrap">
      <nav className="regions" aria-label="Choose a town or area">
        {REGIONS.map((r) => (
          <Link
            key={r.id}
            href={`/${r.id}`}
            className="region-tab"
            aria-current={region.id === r.id ? "page" : undefined}
          >
            {r.name}
          </Link>
        ))}
      </nav>

      <header>
        <div className="leaf-scatter" aria-hidden="true">
          {region.leaves.slice(0, 6).map((leaf, i) => (
            <LeafIcon key={leaf.id} shape={leaf.shape} color={leaf.colors[0]} className={`scatter-leaf s${i}`} />
          ))}
        </div>
        <div>
          <p className="eyebrow">{region.eyebrow}</p>
          <h1>
            {region.name} <em>Leaf Hunt</em>
          </h1>
        </div>
        <div className="tally" aria-live="polite">
          <span className="eyebrow">Your herbarium</span>
          <div className="big">
            {foundCount}
            <small> / {region.leaves.length} leaves</small>
          </div>
          <div className="bar">
            <i style={{ width: `${(foundCount / region.leaves.length) * 100}%` }} />
          </div>
          <div className="rank">
            <b>{foundPts}</b> / {regionMax} pts · <span>{rank}</span>
          </div>
        </div>
        <p className="lede">
          {region.tagline} Tap a card when you&apos;ve got the leaf. <strong>Timing:</strong> it&apos;s
          early October, so red maples and sumac are turning first; most of the region hits peak
          color in the <strong>third and fourth weeks of October</strong>, and oaks hang on into
          November.
        </p>
      </header>

      <div className="filters" role="group" aria-label="Filter leaves">
        {FILTERS.map((f) => (
          <button
            key={f.id}
            type="button"
            className="chip"
            aria-pressed={filter === f.id}
            onClick={() => setFilter(f.id)}
          >
            {f.label}
          </button>
        ))}
        <ResetButton onConfirm={() => reset(region.id)} />
      </div>

      <div className="grid">
        {visible.length === 0 ? (
          <p className="hint">
            {filter === "got"
              ? "Nothing found yet. Tap a card once you have the leaf."
              : "You've found everything in this group."}
          </p>
        ) : (
          visible.map((leaf) => {
            const dateLabel = found[leaf.id];
            const got = Boolean(dateLabel);
            return (
              <button
                key={leaf.id}
                type="button"
                className={`card${got ? " got" : ""}`}
                aria-pressed={got}
                onClick={() => toggle(region.id, leaf.id)}
              >
                <LeafIcon shape={leaf.shape} color={leaf.colors[0]} />
                <div className="nm">
                  <h3>{leaf.name}</h3>
                  <div className="latin">{leaf.latin}</div>
                </div>
                <div className="meta">
                  <span className="tag pts">
                    {leaf.pts} pt{leaf.pts > 1 ? "s" : ""}
                  </span>
                  <span className="tag swatch" title="Fall colors">
                    {leaf.colors.map((c, i) => (
                      <span key={i} style={{ background: c }} />
                    ))}
                  </span>
                </div>
                <div />
                <dl>
                  <div>
                    <dt>How to spot it</dt>
                    <dd>{leaf.spot}</dd>
                  </div>
                  <div>
                    <dt>Where to look</dt>
                    <dd>{leaf.where}</dd>
                  </div>
                </dl>
                <span className="stamp">{got ? `Found ${dateLabel}` : "Found"}</span>
              </button>
            );
          })
        )}
      </div>
      <p className="hint">Progress is saved in this browser only.</p>

      <section>
        <h2>Where to hunt</h2>
        <p className="sub">
          Two kinds of places. Nature preserves and gardens ask you to leave everything where it
          is, so snap a photo of the leaf there. City and county parks are fine for picking up
          fallen leaves to press.
        </p>
        <div className="spots">
          {region.spots.map((spot) => (
            <div key={spot.name} className="spot">
              <h3>
                {spot.name}
                <span className={`rule ${spot.rule}`}>{spot.rule === "take" ? "Collect" : "Photo only"}</span>
              </h3>
              <div className="where">{spot.where}</div>
              <p>{spot.about}</p>
              <div className="has">
                {spot.has.map((h) => (
                  <span key={h}>{h}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section>
        <h2>Field rules</h2>
        <div className="tips">
          <div>
            <h3>Take from the ground</h3>
            <p>
              Fresh-fallen leaves press best and you never have to pull one off a tree. Grab two
              of each in case one cracks.
            </p>
          </div>
          <div>
            <h3>Press them same day</h3>
            <p>
              Lay leaves flat between paper towels inside a heavy book for 1-2 weeks. A sheet of
              wax paper keeps the pages clean.
            </p>
          </div>
          <div>
            <h3>Watch for the three-leaf vine</h3>
            <p>
              Poison ivy turns a gorgeous red right now and loves the same woods. &quot;Leaves of
              three&quot; stay on the ground.
            </p>
          </div>
          <div>
            <h3>Count it with a photo</h3>
            <p>
              At nature preserves and gardens, a clear photo of the leaf next to your hand counts
              as found.
            </p>
          </div>
        </div>
      </section>

      <footer>{region.footer}</footer>
    </div>
  );
}
