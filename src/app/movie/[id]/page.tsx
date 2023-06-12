"use client";

import { useParams } from "next/navigation";

const getMovieById = async (id: string) => {
  const res = await fetch(
    `https://api.themoviedb.org/3/movie/${id}?language=en-US&api_key=92b418e837b833be308bbfb1fb2aca1e`
  );
  return res.json();
};

async function MovieDetail() {
  const params = useParams();
  const movie = await getMovieById(params.id);

  console.log("movie::", movie);

  return <div>MovieDetail: {params.id}</div>;
}

export default MovieDetail;
