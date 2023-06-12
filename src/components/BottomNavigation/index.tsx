import NavigationLink from "../NavigationLink";

import { routes } from "@/config/routes";

const BottomNavigation = () => (
  <div className="absolute bottom-0 w-full h-16 bg-purple-dark text-white">
    <ul className="flex justify-around items-center gap-6 h-full">
      {routes.map((route) => (
        <li key={route.text}>
          <NavigationLink href={route.href}>
            <div className="flex flex-col justify-center items-center h-14">
              {route.icon}
              <span>{route.text}</span>
            </div>
          </NavigationLink>
        </li>
      ))}
    </ul>
  </div>
);

export default BottomNavigation;
