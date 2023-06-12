import { Genre } from "@/types";

import Chip from "../Chip";

interface DetailsTableProps {
  genres: Genre[];
  originalCountry: string;
  releaseDate: string;
  runtime: string;
}

const DetailsTable: React.FC<DetailsTableProps> = ({
  genres,
  originalCountry,
  releaseDate,
  runtime,
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

      <tr className="border-b-white border-b-[1px]">
        <td>Runtime</td>
        <td className="p-4">{runtime} min</td>
      </tr>

      <tr className="border-b-white border-b-[1px]">
        <td>Original country</td>
        <td className="p-4 uppercase">{originalCountry}</td>
      </tr>
    </tbody>
  </table>
);

export default DetailsTable;
