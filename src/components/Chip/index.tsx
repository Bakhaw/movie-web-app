import React from "react";

interface ChipProps {
  children: React.ReactNode;
}

const Chip: React.FC<ChipProps> = ({ children }) => (
  <div className="px-4 py-[1px] bg-grey rounded-2xl text-sm">{children}</div>
);

export default Chip;