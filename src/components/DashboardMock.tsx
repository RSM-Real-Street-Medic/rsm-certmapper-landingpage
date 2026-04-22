import { motion } from "framer-motion";

const certs = [
  { name: "NREMT Paramedic", hours: 48, total: 60, color: "var(--signal)" },
  { name: "State License — TX", hours: 36, total: 48, color: "oklch(0.78 0.16 200)" },
  { name: "ACLS", hours: 8, total: 8, color: "oklch(0.82 0.17 145)" },
  { name: "PALS", hours: 6, total: 8, color: "oklch(0.78 0.18 70)" },
  { name: "IBSC FP-C", hours: 24, total: 100, color: "oklch(0.72 0.17 320)" },
];

export function DashboardMock() {
  return (
    <div className="relative overflow-hidden rounded-xl border border-border bg-surface p-5 shadow-2xl sm:p-6">
      <div className="mb-5 flex items-center gap-1.5">
        <span className="h-2.5 w-2.5 rounded-full bg-muted-foreground/30" />
        <span className="h-2.5 w-2.5 rounded-full bg-muted-foreground/30" />
        <span className="h-2.5 w-2.5 rounded-full bg-muted-foreground/30" />
        <span className="ml-3 font-mono text-xs text-muted-foreground">
          rsm-cert-mapper / dashboard
        </span>
      </div>

      <motion.div
        initial={{ opacity: 0, y: -6 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="mb-5 flex items-center justify-between rounded-md border border-signal/30 bg-signal/5 px-4 py-3"
      >
        <div>
          <div className="text-xs uppercase tracking-wider text-signal">New CE logged</div>
          <div className="text-sm font-medium text-foreground">
            Cardiac Arrest Management — 4 hrs
          </div>
        </div>
        <div className="font-mono text-xs text-muted-foreground">applied → 5 certs</div>
      </motion.div>

      <div className="space-y-4">
        {certs.map((c, i) => {
          const pct = Math.round((c.hours / c.total) * 100);
          return (
            <div key={c.name}>
              <div className="mb-1.5 flex items-baseline justify-between">
                <span className="text-sm font-medium text-foreground">{c.name}</span>
                <span className="font-mono text-xs text-muted-foreground">
                  {c.hours}/{c.total} hrs
                </span>
              </div>
              <div className="h-2 w-full overflow-hidden rounded-full bg-muted">
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: `${pct}%` }}
                  transition={{ delay: 0.4 + i * 0.1, duration: 0.8, ease: "easeOut" }}
                  className="h-full rounded-full"
                  style={{ background: c.color }}
                />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
