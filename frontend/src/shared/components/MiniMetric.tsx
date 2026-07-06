import { classes } from "../lib/classes";

export function MiniMetric({ label, value, valueClassName }: { label: string; value: string; valueClassName?: string }) {
  return (
    <div className="rounded-md border border-divider bg-elevation-0 px-3 py-2">
      <div className="text-xs font-semibold uppercase tracking-wide text-foreground-subtle">{label}</div>
      <div className={classes("mt-1 truncate text-sm font-medium", valueClassName)}>{value}</div>
    </div>
  );
}
