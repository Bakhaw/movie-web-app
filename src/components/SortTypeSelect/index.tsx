import { DataSortType } from "@/types";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";

interface SortTypeSelectProps {
  onValueChange: (value: string) => void;
}

const SortTypeSelect: React.FC<SortTypeSelectProps> = ({ onValueChange }) => (
  <Select defaultValue={DataSortType.popular} onValueChange={onValueChange}>
    <SelectTrigger className="w-28">
      <SelectValue placeholder="Filter" />
    </SelectTrigger>
    <SelectContent>
      <SelectItem value={DataSortType.popular}>Popular</SelectItem>
      <SelectItem value={DataSortType.top_rated}>Top rated</SelectItem>
    </SelectContent>
  </Select>
);
export default SortTypeSelect;
