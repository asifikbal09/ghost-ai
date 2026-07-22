import { ClerkProvider, Show, SignInButton, SignUpButton, UserButton } from '@clerk/nextjs'

/**
 * Provides the application-wide document shell with Clerk authentication controls.
 *
 * @returns The HTML document containing authentication controls and the provided child content
 */
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <ClerkProvider>
          <header>
            <Show when="signed-out">
              <SignInButton />
              <SignUpButton />
            </Show>
            <Show when="signed-in">
              <UserButton />
            </Show>
          </header>
          {children}
        </ClerkProvider>
      </body>
    </html>
  )
}
