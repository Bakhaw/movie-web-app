import Image from "next/image";

import config from "@/config";

interface PosterProps {
  height: number;
  src: string;
  title: string;
}

const Poster: React.FC<PosterProps> = ({ height, src, title }) => (
  <div className="group">
    <Image
      alt={title}
      height={0}
      width={0}
      sizes="100vw"
      src={`${config.TMDB_IMAGE_BASE_URL}/${src}`}
      className={`h-[${height}px] w-auto object-cover border-8 bg-purple-dark border-purple-grey group-hover:border-orange`}
    />

    <h1 className="mt-2 text-center text-white text-sm md:text-base group-hover:text-orange">
      {title}
    </h1>
  </div>
);

export default Poster;
