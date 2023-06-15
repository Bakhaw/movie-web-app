import { ChangeEvent } from "react";

interface SelectProps {
  onChange: (e: ChangeEvent<HTMLSelectElement>) => void;
  options: string[];
}

const Select: React.FC<SelectProps> = ({ onChange, options }) => (
  <select className="bg-purple text-white" onChange={onChange}>
    {options.map((option, i) => (
      <option key={i} value={option}>
        {option}
      </option>
    ))}
  </select>
);

export default Select;
