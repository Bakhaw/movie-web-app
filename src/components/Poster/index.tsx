import Image from "next/image";
import classNames from "classnames";

import config from "@/config";

interface PosterProps {
  disableHover?: boolean; // default false
  src: string;
  title: React.ReactNode;
}

const Poster: React.FC<PosterProps> = ({
  disableHover = false,
  src,
  title,
}) => (
  <div className="group w-fit">
    <div className="relative w-[240px] aspect-[2/3]">
      <Image
        className={classNames(
          `object-cover border-8 bg-purple-dark border-purple-grey`,
          !disableHover && "group-hover:border-orange"
        )}
        alt="Poster"
        src={`${config.TMDB_IMAGE_BASE_URL}${src}`}
        sizes="(max-width: 768px) 100vw"
        fill
        priority
      />
    </div>

    <h1
      className={classNames(
        "mt-2 text-center text-white text-sm md:text-base",
        !disableHover && "group-hover:text-orange"
      )}
    >
      {title}
    </h1>
  </div>
);

export default Poster;
