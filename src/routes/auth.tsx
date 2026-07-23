import { createFileRoute, useNavigate, Link } from "@tanstack/react-router";
import { useState } from "react";
import { SiteLayout } from "@/components/site/Layout";
import { supabase } from "@/integrations/supabase/client";
import { lovable } from "@/integrations/lovable";
import { toast } from "sonner";

export const Route = createFileRoute("/auth")({
  head: () => ({
    meta: [
      { title: "Sign in — Troop 2001 Naples" },
      { name: "description", content: "Sign in to Troop 2001 Naples admin." },
      { property: "og:title", content: "Sign in — Troop 2001 Naples" },
      { property: "og:description", content: "Troop 2001 admin sign in." },
      { name: "robots", content: "noindex" },
    ],
  }),
  component: AuthPage,
});

function AuthPage() {
  const navigate = useNavigate();
  const [mode, setMode] = useState<"signin" | "signup">("signin");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [busy, setBusy] = useState(false);

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    setBusy(true);
    try {
      if (mode === "signin") {
        const { error } = await supabase.auth.signInWithPassword({ email, password });
        if (error) throw error;
      } else {
        const { error } = await supabase.auth.signUp({
          email,
          password,
          options: { emailRedirectTo: window.location.origin },
        });
        if (error) throw error;
        toast.success("Account created. Check your email if confirmation is required.");
      }
      navigate({ to: "/_authenticated/admin/events" as string });
    } catch (err) {
      toast.error(err instanceof Error ? err.message : "Sign in failed");
    } finally {
      setBusy(false);
    }
  }

  async function onGoogle() {
    setBusy(true);
    const result = await lovable.auth.signInWithOAuth("google", {
      redirect_uri: window.location.origin,
    });
    if (result.error) {
      toast.error(result.error.message ?? "Google sign in failed");
      setBusy(false);
      return;
    }
    if (result.redirected) return;
    navigate({ to: "/_authenticated/admin/events" as string });
  }

  return (
    <SiteLayout>
      <section className="py-20">
        <div className="container-page max-w-md">
          <div className="eyebrow">Troop Admin</div>
          <h1 className="mt-3 font-display text-4xl">Sign in</h1>
          <p className="mt-2 text-sm text-muted-foreground">
            Access the admin area to manage events. First-time admin? Create an account and ask a
            troop leader to grant admin access.
          </p>

          <button
            type="button"
            onClick={onGoogle}
            disabled={busy}
            className="btn-outline mt-8 w-full"
          >
            Continue with Google
          </button>

          <div className="my-6 flex items-center gap-3 text-xs text-muted-foreground">
            <div className="h-px flex-1 bg-border" /> or <div className="h-px flex-1 bg-border" />
          </div>

          <form onSubmit={onSubmit} className="space-y-3">
            <div>
              <label className="text-xs font-medium uppercase tracking-widest text-muted-foreground">Email</label>
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="mt-1 w-full rounded-lg border border-border bg-background px-3 py-2 text-sm"
              />
            </div>
            <div>
              <label className="text-xs font-medium uppercase tracking-widest text-muted-foreground">Password</label>
              <input
                type="password"
                required
                minLength={6}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="mt-1 w-full rounded-lg border border-border bg-background px-3 py-2 text-sm"
              />
            </div>
            <button type="submit" disabled={busy} className="btn-primary w-full">
              {mode === "signin" ? "Sign in" : "Create account"}
            </button>
          </form>

          <button
            type="button"
            onClick={() => setMode(mode === "signin" ? "signup" : "signin")}
            className="mt-4 text-sm text-forest underline-offset-4 hover:underline"
          >
            {mode === "signin" ? "Need an account? Sign up" : "Have an account? Sign in"}
          </button>

          <div className="mt-8 text-xs text-muted-foreground">
            <Link to="/" className="hover:underline">← Back to home</Link>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
