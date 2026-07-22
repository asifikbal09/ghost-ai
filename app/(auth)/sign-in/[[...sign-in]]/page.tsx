import { SignIn } from "@clerk/nextjs";

import { AuthShell } from "@/components/auth/auth-shell";

/**
 * Renders the sign-in page with the shared authentication layout.
 */
export default function SignInPage() {
  return (
    <AuthShell heading="Welcome back">
      <SignIn />
    </AuthShell>
  );
}
