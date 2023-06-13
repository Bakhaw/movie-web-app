import { TV } from "@/types";
import config from "@/config";

const getTvById = async (id: string): Promise<TV> => {
  const res = await fetch(
    `https://api.themoviedb.org/3/tv/${id}?language=en-US&api_key=92b418e837b833be308bbfb1fb2aca1e`
  );
  return res.json();
};

interface PageProps {
  params: {
    id: string;
  };
}

async function Page({ params }: PageProps) {
  const tv = await getTvById(params.id);

  console.log("tv::", tv);

  return (
    <div>
      <span>TV Detail: {params.id}</span>
      <img src={`${config.TMDB_IMAGE_BASE_URL}/${tv.backdrop_path}`} alt="" />
    </div>
  );
}

export default Page;
