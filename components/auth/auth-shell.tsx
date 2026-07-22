import type { ReactNode } from "react";

interface AuthShellProps {
  children: ReactNode;
  heading: string;
}

export function AuthShell({ children, heading }: AuthShellProps) {
  return (
    <main className="grid min-h-screen bg-base lg:grid-cols-2">
      <section className="hidden border-r border-surface-border bg-surface p-10 lg:flex lg:flex-col lg:justify-between">
        <div className="text-sm font-semibold tracking-wide text-brand">Ghost AI</div>
        <div className="max-w-sm space-y-6">
          <div className="space-y-3">
            <p className="text-2xl font-semibold tracking-tight text-copy-primary">
              Design systems together.
            </p>
            <p className="text-sm leading-6 text-copy-secondary">
              Turn ideas into clear, collaborative architecture.
            </p>
          </div>
          <ul className="space-y-3 text-sm text-copy-muted">
            <li>Collaborative design canvas</li>
            <li>AI-assisted architecture</li>
            <li>Technical specs from your graph</li>
          </ul>
        </div>
        <p className="text-xs text-copy-faint">Built for thoughtful systems work.</p>
      </section>

      <section className="flex min-h-screen items-center justify-center px-5 py-10 sm:px-8">
        <div className="w-full max-w-md space-y-6">
          <div className="space-y-2 lg:hidden">
            <p className="text-sm font-semibold tracking-wide text-brand">Ghost AI</p>
            <p className="text-2xl font-semibold tracking-tight text-copy-primary">
              {heading}
            </p>
          </div>
          {children}
        </div>
      </section>
    </main>
  );
}
