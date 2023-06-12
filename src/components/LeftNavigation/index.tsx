import NavigationLink from "../NavigationLink";

import { routes } from "@/config/routes";

const LeftNavigation = () => (
  <div className="flex flex-col gap-8 py-6 w-72 md:w-56 bg-purple-dark">
    <ul className="flex flex-col gap-2 px-4 w-full">
      {routes.map((route) => (
        <li key={route.text}>
          <NavigationLink href={route.href}>{route.text}</NavigationLink>
        </li>
      ))}
    </ul>
  </div>
);

export default LeftNavigation;
