# Progress Tracker

Update this file after every meaningful implementation
change.

## Current Phase

- Authentication

## Current Goal

- Implement Clerk authentication, protected routes, and the native user menu.

## Completed

- Configured shadcn/ui with a dark-only token theme.
- Added Button, Card, Dialog, Input, Tabs, Textarea, and ScrollArea primitives.
- Installed Lucide React and the shared `cn()` class-merging utility.
- Added reusable editor navbar and floating project sidebar shell with project tabs, empty states, and a new-project action.
- Confirmed the existing token-based shadcn Dialog composition supports future title, description, and footer actions without instantiating a dialog in this feature.
- Added Clerk provider setup using the dark theme and existing design tokens.
- Added protected `/editor` routing, public sign-in/sign-up pages, root redirects, and Clerk's native user menu.

## In Progress

- Verify the authentication feature build.

## Next Up

- Implement the next feature specification.

## Open Questions

- None.

## Architecture Decisions

- UI primitives will remain generated shadcn/ui foundation components; project-specific composition belongs outside `components/ui/`.

## Session Notes

- The initial Next.js boilerplate stylesheet and public SVG assets have been removed. `app/favicon.ico` remains.
- `components/ui/*` contains CLI-generated shadcn/ui primitives and must remain unmodified.
- `npm run lint` and `npx tsc --noEmit` pass. `npm run build` is blocked solely by unavailable Google Font downloads for the pre-existing Geist font setup.
