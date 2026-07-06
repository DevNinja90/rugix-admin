import type { ReactNode } from "react";
import { classes } from "../lib/classes";

export function Badge({ color, children, className }: { color: string; children: ReactNode; className?: string }) {
  return (
    <span className={classes("inline-flex items-center gap-1 whitespace-nowrap rounded-full px-2 py-0.5 text-xs font-medium ring-1 ring-inset", color, className)}>
      {children}
    </span>
  );
}
