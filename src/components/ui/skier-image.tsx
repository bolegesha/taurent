"use client";

import Image from "next/image";

// Using direct Image component with a fixed remote image URL
// In a production app, you would save this image locally
export function SkierImage({ 
  alt = "Skier on a snowy mountain", 
  className = "",
  priority = false
}: {
  alt?: string;
  className?: string;
  priority?: boolean;
}) {
  return (
    <div className="relative h-full w-full overflow-hidden">
      <Image
        src="https://images.unsplash.com/photo-1551698618-1dfe5d97d256?q=80&w=1000"
        alt={alt}
        fill
        className={`object-cover ${className}`}
        priority={priority}
      />
    </div>
  );
} 