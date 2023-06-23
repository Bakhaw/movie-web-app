import React from "react";
import { Badge } from "../ui/badge";

interface ChipProps {
  children: React.ReactNode;
}

const Chip: React.FC<ChipProps> = ({ children }) => (
  <Badge className="px-4 py-[1px] bg-secondary hover:bg-secondary rounded-2xl text-sm shrink-0 line-clamp-1">
    {children}
  </Badge>
);

export default Chip;
