import { routes } from "./routes";
import NavigationLink from "./NavigationLink";
import IconArrowBarLeft from "@/icons/IconArrowBarLeft";

interface NavigationLinksProps {
  onClose: () => void;
}

const NavigationLinks: React.FC<NavigationLinksProps> = ({ onClose }) => (
  <div className="flex flex-col gap-8 py-2 w-72 md:w-56 bg-purple-dark">
    <button className="flex justify-end w-full" onClick={onClose}>
      <IconArrowBarLeft className="text-white h-6 w-6" />
    </button>

    <ul className="flex flex-col gap-2 px-4 w-full">
      {routes.map((route) => (
        <li key={route.text}>
          <NavigationLink {...route} />
        </li>
      ))}
    </ul>
  </div>
);

export default NavigationLinks;
