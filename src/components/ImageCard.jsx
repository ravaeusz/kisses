"use client";

import Image from "next/image";
import { useState } from "react";
import Skeleton from "./Skeleton";

export default function ImageCard({ src, alt, className = "", width = 320, height = 432 }) {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(false);

  const imageSrc = Array.isArray(src) ? src[0] : src;
  const aspectRatio = (width / height) * 100;

  return (
    <div className={`relative w-full overflow-hidden bg-gray-100 aspect-[3/4] ${className}`}>
      {isLoading && !error && (
        <Skeleton className="absolute inset-0 w-full h-full" />
      )}

      <Image
        src={imageSrc}
        alt={alt || "card image"}
        width={width}
        height={height}
        quality={80}
        priority={false}
        loading="lazy"
        onLoadingComplete={() => setIsLoading(false)}
        onError={() => {
          setIsLoading(false);
          setError(true);
        }}
        className={`w-full h-full object-cover transition-opacity duration-300 ${
          isLoading ? "opacity-0" : "opacity-100"
        }`}
      />

      {error && (
        <div className="absolute inset-0 flex items-center justify-center bg-gray-200">
          <span className="text-gray-500 text-sm">Erro ao carregar</span>
        </div>
      )}
    </div>
  );
}
