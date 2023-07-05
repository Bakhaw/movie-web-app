"use client";

import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";

import { cn } from "@/lib/utils";

interface PosterProps extends React.HTMLAttributes<HTMLDivElement> {
  src: string;
  subtitle?: string;
  title?: string;
  width: number;
  height: number;
}

const Poster: React.FC<PosterProps> = ({
  className,
  src,
  subtitle,
  title,
  width,
  height,
}) => (
  <AnimatePresence>
    <motion.div
      className={cn("space-y-3", className)}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <div className="overflow-hidden rounded-md">
        <Image
          alt={`${title} poster`}
          className={cn(
            "h-auto w-auto object-cover transition-all hover:scale-105 aspect-[2/3]",
            className
          )}
          src={src}
          width={width}
          height={height}
        />
      </div>

      {(title || subtitle) && (
        <div className="space-y-1 text-sm">
          {title && <h3 className="font-medium leading-none">{title}</h3>}

          {subtitle && (
            <p className="text-xs text-muted-foreground">{subtitle}</p>
          )}
        </div>
      )}
    </motion.div>
  </AnimatePresence>
);

export default Poster;
