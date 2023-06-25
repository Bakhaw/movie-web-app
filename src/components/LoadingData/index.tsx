import { Skeleton } from "../ui/skeleton";

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const LoadingData = () => (
  <ul className="flex flex-wrap items-start">
    {arr.map((item) => (
      <li
        key={item}
        className="p-2 space-y-3 w-[100%] sm:w-[50%] lg:w-[25%] xl:w-[20%]"
      >
        <Skeleton className="w-full h-auto rounded-md aspect-[2/3]" />
        <Skeleton className="w-[120px] h-[8px] rounded-md" />
        <Skeleton className="w-[40px] h-[6px] rounded-md" />
      </li>
    ))}
  </ul>
);

export default LoadingData;
