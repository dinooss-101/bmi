import React from "react"
import Image from "next/image"
import { Camera, MapPin, type LucideIcon } from "lucide-react"

interface ImagePlaceholderProps {
  aspectRatio?: "4/3" | "16/9" | "3/2" | "4/5" | "1/1" | "21/9" | "video" | "square" | "wide"
  category?: string
  badge?: string
  location?: string
  title?: string
  subtitle?: string
  hint?: string
  src?: string
  alt?: string
  theme?: "forest" | "navy" | "stone" | "default" | string
  icon?: LucideIcon
  className?: string
  priority?: boolean
}

export function ImagePlaceholder({
  aspectRatio = "4/3",
  category,
  badge,
  location,
  title,
  subtitle,
  hint = "1200 × 900 · 4:3 Editorial",
  src,
  alt,
  icon: CustomIcon,
  className = "",
  priority = false,
}: ImagePlaceholderProps) {
  const aspectClass = {
    "4/3": "aspect-[4/3]",
    "16/9": "aspect-[16/9]",
    "3/2": "aspect-[3/2]",
    "4/5": "aspect-[4/5]",
    "1/1": "aspect-square",
    "21/9": "aspect-[21/9]",
    video: "aspect-video",
    square: "aspect-square",
    wide: "aspect-[21/9]",
  }[aspectRatio] || "aspect-[4/3]"

  const displayCategory = category || badge
  const displayHint = subtitle ? subtitle : hint
  const IconComponent = CustomIcon || Camera

  if (src) {
    return (
      <div className={`relative overflow-hidden border border-border/60 bg-muted/30 ${aspectClass} ${className}`}>
        <Image
          src={src}
          alt={alt || title || "Photo"}
          fill
          priority={priority}
          className="object-cover"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        {title && (
          <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent p-4 text-white">
            <span className="text-xs font-medium">{title}</span>
          </div>
        )}
      </div>
    )
  }

  return (
    <div
      className={`group relative flex flex-col justify-between border border-border/70 bg-muted/20 p-5 transition-colors hover:border-border hover:bg-muted/40 ${aspectClass} ${className}`}
    >
      {/* Architectural Corner Crosshairs - Nordic Lagom */}
      <span className="pointer-events-none absolute -top-1 -left-1 size-2 border-t-2 border-l-2 border-primary/40" />
      <span className="pointer-events-none absolute -top-1 -right-1 size-2 border-t-2 border-r-2 border-primary/40" />
      <span className="pointer-events-none absolute -bottom-1 -left-1 size-2 border-b-2 border-l-2 border-primary/40" />
      <span className="pointer-events-none absolute -bottom-1 -right-1 size-2 border-b-2 border-r-2 border-primary/40" />

      {/* Top Metadata */}
      <div className="flex items-center justify-between gap-2">
        {displayCategory ? (
          <span className="border border-border/50 bg-background/80 px-2 py-0.5 text-[11px] font-medium text-muted-foreground">
            {displayCategory}
          </span>
        ) : (
          <span />
        )}
        {location && (
          <span className="flex items-center gap-1 text-[11px] text-muted-foreground">
            <MapPin className="size-3 text-secondary" />
            <span>{location}</span>
          </span>
        )}
      </div>

      {/* Center Icon & Framing */}
      <div className="my-auto flex flex-col items-center justify-center py-4 text-center">
        <div className="flex size-10 items-center justify-center border border-border/60 bg-background/60 text-muted-foreground">
          <IconComponent className="size-5" />
        </div>
        {title && (
          <p className="mt-3 max-w-[85%] text-balance font-headline text-sm font-medium text-foreground">
            {title}
          </p>
        )}
      </div>

      {/* Bottom Technical Spec / Subtitle */}
      <div className="flex items-center justify-between border-t border-border/30 pt-2 text-[11px] font-medium text-muted-foreground">
        <span>Photo Placeholder</span>
        <span className="truncate max-w-[65%] font-mono">{displayHint}</span>
      </div>
    </div>
  )
}
