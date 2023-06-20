import Image from "next/image";

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
  ...props
}) => (
  <div className={cn("space-y-3", className)} {...props}>
    <div className="overflow-hidden rounded-md">
      <Image
        alt={`${title} poster`}
        className="h-auto w-auto object-cover transition-all hover:scale-105 aspect-[2/3]"
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
  </div>
);

export default Poster;
