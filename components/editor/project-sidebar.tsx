"use client"

import { Plus, X } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { cn } from "@/lib/utils"

interface ProjectSidebarProps {
  isOpen: boolean
  onClose: () => void
}

function EmptyProjectsState({ label }: { label: string }) {
  return (
    <div className="flex flex-1 items-center justify-center rounded-2xl border border-dashed border-surface-border bg-subtle px-6 text-center text-sm text-copy-muted">
      No {label.toLowerCase()} yet.
    </div>
  )
}

export function ProjectSidebar({ isOpen, onClose }: ProjectSidebarProps) {
  return (
    <aside
      aria-hidden={!isOpen}
      aria-label="Projects sidebar"
      className={cn(
        "fixed top-[4.5rem] bottom-4 left-4 z-50 flex w-80 flex-col gap-5 rounded-2xl border border-surface-border bg-surface/95 p-4 shadow-2xl backdrop-blur transition-transform duration-200 ease-out",
        isOpen ? "translate-x-0" : "-translate-x-[calc(100%+1rem)]"
      )}
    >
      <div className="flex items-center justify-between">
        <h2 className="text-base font-semibold text-copy-primary">Projects</h2>
        <Button
          aria-label="Close projects sidebar"
          onClick={onClose}
          size="icon"
          variant="ghost"
        >
          <X className="h-5 w-5" />
        </Button>
      </div>

      <Tabs className="min-h-0 flex-1" defaultValue="my-projects">
        <TabsList className="w-full bg-subtle">
          <TabsTrigger value="my-projects">My Projects</TabsTrigger>
          <TabsTrigger value="shared">Shared</TabsTrigger>
        </TabsList>
        <TabsContent className="flex min-h-0" value="my-projects">
          <EmptyProjectsState label="projects" />
        </TabsContent>
        <TabsContent className="flex min-h-0" value="shared">
          <EmptyProjectsState label="shared projects" />
        </TabsContent>
      </Tabs>

      <Button className="w-full" type="button">
        <Plus className="h-4 w-4" />
        New Project
      </Button>
    </aside>
  )
}
