import { Genre } from "@/types";

import Chip from "../Chip";

interface DetailsTableProps {
  genres: Genre[];
  originalCountry: string;
  releaseDate: string;
  runtime?: number;
  totalEpisodes?: number;
  totalSeasons?: number;
}

const DetailsTable: React.FC<DetailsTableProps> = ({
  genres,
  originalCountry,
  releaseDate,
  runtime,
  totalEpisodes,
  totalSeasons,
}) => (
  <table className="w-full">
    <tbody>
      <tr className="border-b-white border-b-[1px]">
        <td>Release date</td>
        <td className="p-4">{releaseDate}</td>
      </tr>

      <tr className="border-b-white border-b-[1px]">
        <td>Genres</td>
        <td className="p-4">
          <ul className="flex items-center gap-2">
            {genres?.map((genre) => (
              <li key={genre.id}>
                <Chip>{genre.name}</Chip>
              </li>
            ))}
          </ul>
        </td>
      </tr>

      {runtime && (
        <tr className="border-b-white border-b-[1px]">
          <td>Runtime</td>
          <td className="p-4">{runtime} min</td>
        </tr>
      )}

      {totalSeasons && (
        <tr className="border-b-white border-b-[1px]">
          <td>Total seasons</td>
          <td className="p-4">{totalSeasons}</td>
        </tr>
      )}

      {totalEpisodes && (
        <tr className="border-b-white border-b-[1px]">
          <td>Total episodes</td>
          <td className="p-4">{totalEpisodes}</td>
        </tr>
      )}

      <tr className="border-b-white border-b-[1px]">
        <td>Original country</td>
        <td className="p-4 uppercase">{originalCountry}</td>
      </tr>
    </tbody>
  </table>
);

export default DetailsTable;
