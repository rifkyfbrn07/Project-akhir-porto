// components/gallery-card.tsx
"use client";

import Image from "next/image";
import Link from "next/link";

type GalleryItemProps = {
  title: string;
  image: string;
  description?: string;
  date?: string;
  href?: string;
};

export function GalleryCard({
  title,
  image,
  description,
  date,
  href,
}: GalleryItemProps) {
  const CardInner = (
    <div
      className="rounded-xl overflow-hidden border border-white/10
        bg-white/5 dark:bg-white/6 backdrop-blur-md
        transition-transform duration-300 ease-out hover:scale-[1.015] hover:shadow-md"
    >
      <div className="relative w-full h-56 sm:h-44 md:h-48">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover"
          priority={false}
        />
      </div>

      <div className="p-4 space-y-1">
        <h3 className="text-lg font-semibold leading-snug">{title}</h3>
        {description && (
          <p className="text-sm text-muted-foreground line-clamp-2">
            {description}
          </p>
        )}
        {date && (
          <p className="text-xs text-muted-foreground opacity-80">{date}</p>
        )}
      </div>
    </div>
  );

  if (href) {
    return (
      <Link href={href} className="block">
        {CardInner}
      </Link>
    );
  }

  return CardInner;
}
