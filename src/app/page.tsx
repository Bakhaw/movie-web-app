import Link from "next/link";

const getTrendingData = async () => {
  const res = await fetch(
    "https://api.themoviedb.org/3/trending/all/week?language=fr-FR&api_key=92b418e837b833be308bbfb1fb2aca1e"
  );
  return res.json();
};

export default async function Home() {
  const trending = await getTrendingData();

  console.log("trending", trending);

  return (
    <main className="flex flex-col items-center justify-between">
      Home Page
      {trending.results.map((item: any) => (
        <div>
          <Link href={`/movie/${item.id}`}>
            <span>{item.title || item.name}</span>
          </Link>
        </div>
      ))}
    </main>
  );
}
