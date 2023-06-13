import Image from "next/image";
import classNames from "classnames";

import config from "@/config";

interface PosterProps {
  disableHover?: boolean; // default false
  height: string;
  src: string;
  title: React.ReactNode;
  width: string;
}

const Poster: React.FC<PosterProps> = ({
  disableHover = false,
  height,
  src,
  title,
  width,
}) => (
  <div className="group w-fit">
    <Image
      alt="Poster"
      height={0}
      width={0}
      sizes="100vw"
      src={`${config.TMDB_IMAGE_BASE_URL}${src}`}
      className={classNames(
        `h-[${height}px] w-[${width}px] object-cover border-8 bg-purple-dark border-purple-grey`,
        !disableHover && "group-hover:border-orange"
      )}
    />

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
