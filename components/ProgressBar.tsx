export function ProgressBar({
  foundCount,
  totalCount,
  score,
  totalScore,
}: {
  foundCount: number;
  totalCount: number;
  score: number;
  totalScore: number;
}) {
  const percent = totalCount === 0 ? 0 : Math.round((foundCount / totalCount) * 100);

  return (
    <div className="w-full">
      <div className="mb-1 flex items-center justify-between text-sm text-zinc-600 dark:text-zinc-400">
        <span>
          {foundCount} / {totalCount} leaves found
        </span>
        <span>
          {score} / {totalScore} pts
        </span>
      </div>
      <div className="h-3 w-full overflow-hidden rounded-full bg-zinc-100 dark:bg-zinc-800">
        <div
          className="h-full rounded-full bg-gradient-to-r from-emerald-400 to-emerald-600 transition-all duration-500"
          style={{ width: `${percent}%` }}
        />
      </div>
    </div>
  );
}
