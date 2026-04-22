import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Check, Loader2 } from "lucide-react";
import { supabase } from "../integrations/supabase/client";

interface Props {
  id?: string;
  variant?: "hero" | "footer";
}

export function EmailCapture({ id }: Props) {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  if (!supabase) {
    return (
      <div
        id={id}
        className="rounded-md border border-border bg-muted/20 px-4 py-3 text-sm text-muted-foreground"
        role="status"
      >
        Waitlist storage is not configured yet.
      </div>
    );
  }

  const client = supabase;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const trimmed = email.trim().toLowerCase();
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(trimmed)) {
      setError("Enter a valid email.");
      return;
    }
    setError("");
    setLoading(true);
    const { error: dbError } = await client.from("waitlist_signups").insert({
      email: trimmed,
      user_agent: typeof navigator !== "undefined" ? navigator.userAgent : null,
      source: typeof window !== "undefined" ? window.location.pathname : null,
    });
    setLoading(false);
    if (dbError) {
      // Treat duplicate email as success (already on the list)
      if (dbError.code === "23505") {
        setSubmitted(true);
        return;
      }
      setError("Something went wrong. Try again.");
      return;
    }
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <motion.div
        initial={{ opacity: 0, y: 6 }}
        animate={{ opacity: 1, y: 0 }}
        className="flex items-center gap-2 rounded-md border border-signal/40 bg-signal/10 px-4 py-3 text-sm font-medium text-signal"
      >
        <Check className="h-4 w-4" />
        You're on the list. We'll email you when it's live.
      </motion.div>
    );
  }

  return (
    <form
      id={id}
      onSubmit={handleSubmit}
      className="flex w-full flex-col gap-2 sm:flex-row"
    >
      <div className="flex-1">
        <input
          type="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="you@medic.com"
          aria-label="Email address"
          className="h-12 w-full rounded-md border border-border bg-input px-4 text-base text-foreground placeholder:text-muted-foreground focus:border-signal focus:outline-none focus:ring-2 focus:ring-signal/30"
        />
        {error && <p className="mt-1 text-xs text-destructive">{error}</p>}
      </div>
      <button
        type="submit"
        disabled={loading}
        className="group inline-flex h-12 items-center justify-center gap-2 rounded-md bg-signal px-6 text-sm font-semibold text-signal-foreground transition-all hover:brightness-110 active:scale-[0.98]"
        style={{ boxShadow: "var(--shadow-glow)" }}
      >
        {loading ? (
          <>
            <Loader2 className="h-4 w-4 animate-spin" />
            Joining…
          </>
        ) : (
          <>
            Join Early Access
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
          </>
        )}
      </button>
    </form>
  );
}
