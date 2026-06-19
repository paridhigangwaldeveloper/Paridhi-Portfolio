"use client"

import { ExternalLink } from "lucide-react"

export interface Project {
  title: string
  description: string
  techStack: string[]
  liveLink?: string   // 👈 optional bana do
}

interface ProjectCardProps {
  project: Project
}

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <article className="flex flex-col h-full rounded-2xl border border-border bg-card p-7 shadow-sm transition-all duration-300 ease-out hover:-translate-y-1 hover:shadow-lg hover:border-foreground/20 group">
      {/* Title */}
      <h3 className="text-lg font-semibold tracking-tight text-card-foreground mb-3 leading-snug">
        {project.title}
      </h3>

      {/* Description — scrollable container */}
      <div className="flex-grow overflow-y-auto pr-2 mb-5" style={{ maxHeight: "140px", scrollbarWidth: "thin", scrollbarColor: "var(--border) transparent" }}>
        <p className="text-sm text-muted-foreground leading-relaxed">
          {project.description}
        </p>
      </div>

      {/* Tech stack */}
      <div className="flex flex-wrap gap-2 mt-5">
        {project.techStack.map((tech) => (
          <span
            key={tech}
            className="inline-flex items-center rounded-md px-2.5 py-1 text-xs font-medium tracking-wide"
            style={{
              backgroundColor: "var(--badge-bg)",
              color: "var(--badge-text)",
            }}
          >
            {tech}
          </span>
        ))}
      </div>

      {/* CTA button — pinned to bottom via mt-auto */}
      <div className="mt-auto pt-6">
        {project.liveLink ? (
          <a
            href={project.liveLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-sm font-medium text-card-foreground underline-offset-4 hover:underline transition-colors duration-200 group-hover:text-primary"
          >
            View Project
            <ExternalLink className="w-3.5 h-3.5 shrink-0" />
          </a>
        ) : (
          <span className="text-sm text-muted-foreground">
            Private Project
          </span>
        )}
      </div>
    </article>
  )
}
