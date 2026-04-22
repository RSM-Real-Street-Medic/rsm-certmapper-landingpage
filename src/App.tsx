
import { motion } from "framer-motion";
import { AlertTriangle, Copy, ShieldOff, Clock, Tag, Shuffle, BarChart3 } from "lucide-react";
import { EmailCapture } from "./components/EmailCapture";
import { DashboardMock } from "./components/DashboardMock";



const pains = [
  { icon: AlertTriangle, text: "Tracking CE for multiple certs is a mess" },
  { icon: Copy, text: "You duplicate hours manually across spreadsheets" },
  { icon: ShieldOff, text: "You're never sure if you're actually compliant" },
  { icon: Clock, text: "Renewal time becomes a scramble" },
];

const steps = [
  {
    n: "01",
    title: "Add your certifications",
    body: "NREMT, state license, ACLS, PALS, IBSC — all of them. One time.",
  },
  {
    n: "02",
    title: "Log your CE once",
    body: "Drop in a course. Tag it. Done. No spreadsheet, no copy-paste.",
  },
  {
    n: "03",
    title: "Watch everything update",
    body: "Hours map across every cert that accepts them. Progress shown live.",
  },
];

const solutionItems = [
  { icon: Tag, label: "Enter once", body: "Log a CE hour with a topic tag." },
  { icon: Shuffle, label: "Map automatically", body: "We apply it to every cert that counts it." },
  { icon: BarChart3, label: "See progress", body: "Know exactly where you stand. Always." },
];

export default function App() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-background text-foreground">
      {/* Background layers */}
      <div className="pointer-events-none absolute inset-0 bg-grid opacity-60" aria-hidden />
      <div className="pointer-events-none absolute inset-x-0 top-0 h-[600px] bg-glow" aria-hidden />

      {/* Nav */}
      <header className="relative z-10 mx-auto flex max-w-6xl items-center justify-between px-6 py-6">
        <div className="flex items-center gap-2">
          <div className="flex h-8 w-8 items-center justify-center rounded-md bg-signal text-signal-foreground">
            <span className="font-display text-sm font-bold">R</span>
          </div>
          <span className="font-display text-base font-semibold tracking-tight">
            RSM Cert Mapper
          </span>
        </div>
        <a
          href="#waitlist"
          className="hidden text-sm font-medium text-muted-foreground hover:text-foreground sm:block"
        >
          Join waitlist →
        </a>
      </header>

      {/* HERO */}
      <section className="relative z-10 mx-auto max-w-6xl px-6 pb-20 pt-12 sm:pt-20">
        <div className="grid gap-12 lg:grid-cols-[1.1fr_1fr] lg:items-center">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              className="mb-5 inline-flex items-center gap-2 rounded-full border border-border bg-surface px-3 py-1 font-mono text-xs uppercase tracking-wider text-muted-foreground"
            >
              <span className="h-1.5 w-1.5 rounded-full bg-signal" />
              Built by medics, for medics
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.05 }}
              className="text-balance font-display text-5xl font-bold leading-[1.05] tracking-tight sm:text-6xl lg:text-7xl"
            >
              Track CE once.{" "}
              <span className="text-signal">Apply it to every cert</span> automatically.
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="mt-6 max-w-xl text-balance text-lg text-muted-foreground sm:text-xl"
            >
              Stop tracking CE across multiple certs.
              <br className="hidden sm:block" /> Log it once. We handle the rest.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.12 }}
              className="mt-3 max-w-xl text-sm text-foreground/70"
            >
              Built for EMTs and paramedics juggling multiple certifications.
            </motion.p>

            <motion.ul
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15 }}
              className="mt-6 space-y-2"
            >
              {[
                "One CE entry. Every cert updated.",
                "No duplicate logging. Ever.",
                "Know your renewal status in one screen.",
              ].map((b) => (
                <li key={b} className="flex items-center gap-2 text-sm text-foreground/90">
                  <span className="h-1 w-1 rounded-full bg-signal" />
                  {b}
                </li>
              ))}
            </motion.ul>

            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="mt-8 max-w-md"
            >
              <EmailCapture id="waitlist" />
              <p className="mt-3 font-mono text-xs text-muted-foreground">
                No spam. First access when it launches.
              </p>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.25, duration: 0.6 }}
          >
            <DashboardMock />

            <div className="mt-8 rounded-lg border border-border bg-surface p-5">
              <div className="font-mono text-xs uppercase tracking-wider text-signal">
                What this actually does
              </div>
              <ul className="mt-3 space-y-2">
                {[
                  "Track CE across all your certifications",
                  "Map hours automatically",
                  "See your renewal status instantly",
                ].map((b) => (
                  <li key={b} className="flex items-center gap-2 text-sm text-foreground/90">
                    <span className="h-1 w-1 rounded-full bg-signal" />
                    {b}
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>
      </section>

      {/* PROBLEM */}
      <section className="relative z-10 border-t border-border bg-surface/40">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <h2 className="max-w-2xl text-balance text-3xl font-bold tracking-tight sm:text-4xl">
            CE tracking shouldn't be this hard.
          </h2>
          <p className="mt-3 max-w-xl text-muted-foreground">
            If you hold more than one cert, you already know.
          </p>

          <div className="mt-10 grid gap-4 sm:grid-cols-2">
            {pains.map((p) => (
              <div
                key={p.text}
                className="flex items-start gap-4 rounded-lg border border-border bg-surface p-5"
              >
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-md bg-destructive/10 text-destructive">
                  <p.icon className="h-5 w-5" />
                </div>
                <p className="pt-1.5 text-base text-foreground">{p.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SOLUTION */}
      <section className="relative z-10">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <div className="max-w-2xl">
            <div className="mb-3 font-mono text-xs uppercase tracking-wider text-signal">
              The fix
            </div>
            <h2 className="text-balance text-3xl font-bold tracking-tight sm:text-4xl">
              Log it once. We handle the rest.
            </h2>
          </div>

          <div className="mt-10 grid gap-px overflow-hidden rounded-xl border border-border bg-border sm:grid-cols-3">
            {solutionItems.map((s) => (
              <div key={s.label} className="bg-surface p-6">
                <s.icon className="h-6 w-6 text-signal" />
                <div className="mt-4 font-display text-lg font-semibold">{s.label}</div>
                <p className="mt-1 text-sm text-muted-foreground">{s.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="relative z-10 border-t border-border bg-surface/40">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <h2 className="text-balance text-3xl font-bold tracking-tight sm:text-4xl">
            Three steps. That's it.
          </h2>

          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {steps.map((s) => (
              <div
                key={s.n}
                className="rounded-lg border border-border bg-surface p-6"
              >
                <div className="font-mono text-sm text-signal">{s.n}</div>
                <h3 className="mt-3 font-display text-xl font-semibold">{s.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{s.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative z-10 border-t border-border">
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-[400px] bg-glow" aria-hidden />
        <div className="relative mx-auto max-w-3xl px-6 py-24 text-center">
          <h2 className="text-balance font-display text-4xl font-bold tracking-tight sm:text-5xl">
            Stop using spreadsheets to track your CE.
          </h2>
          <p className="mt-4 text-balance text-lg text-muted-foreground">
            Get early access. Waitlist gets it first.
          </p>
          <div className="mx-auto mt-8 max-w-md">
            <EmailCapture variant="footer" />
            <p className="mt-3 font-mono text-xs text-muted-foreground">
              No spam. First access when it launches.
            </p>
          </div>
        </div>
      </section>

      <footer className="relative z-10 border-t border-border">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 px-6 py-8 sm:flex-row">
          <span className="font-mono text-xs text-muted-foreground">
            © {new Date().getFullYear()} RSM Cert Mapper
          </span>
          <span className="font-mono text-xs text-muted-foreground">
            Track once. Apply everywhere.
          </span>
        </div>
      </footer>
    </main>
  );
}
