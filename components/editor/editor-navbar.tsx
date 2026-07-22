"use client"

import { UserButton } from "@clerk/nextjs"
import { PanelLeftClose, PanelLeftOpen } from "lucide-react"

import { Button } from "@/components/ui/button"

interface EditorNavbarProps {
  isSidebarOpen: boolean
  onSidebarToggle: () => void
}

/**
 * Renders the editor navigation bar with sidebar controls and a user menu.
 *
 * @param isSidebarOpen - Whether the projects sidebar is currently open
 * @param onSidebarToggle - Callback invoked when the sidebar toggle is activated
 * @returns The editor navigation bar
 */
export function EditorNavbar({
  isSidebarOpen,
  onSidebarToggle,
}: EditorNavbarProps) {
  const ToggleIcon = isSidebarOpen ? PanelLeftClose : PanelLeftOpen

  return (
    <header className="fixed inset-x-0 top-0 z-40 grid h-14 grid-cols-[1fr_auto_1fr] items-center justify-between border-b border-surface-border bg-surface">
      <div className="flex items-center px-3">
        <Button
          aria-label={isSidebarOpen ? "Close projects sidebar" : "Open projects sidebar"}
          onClick={onSidebarToggle}
          size="icon"
          variant="ghost"
        >
          <ToggleIcon className="h-5 w-5" />
        </Button>
      </div>
      <div className="flex justify-end px-3">
        <UserButton />
      </div>
      <div />
    </header>
  )
}
