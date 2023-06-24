"use client";

import { routes } from "@/config/routes";
import useDeviceSize from "@/hooks/useDeviceSize";

import NavigationLink from "../NavigationLink";

// This Navigation is used for mobile
// <Sidebar /> is used for desktop
const BottomNavigation = () => {
  const [innerWidth, _innerHeight] = useDeviceSize();
  const isMdScreen = innerWidth > 768;

  if (isMdScreen) return null;

  return (
    <div className="fixed bottom-0 h-16 w-full bg-background text-white">
      <ul className="flex justify-around items-center gap-6 h-full">
        {routes.map((route) => (
          <li key={route.text}>
            <NavigationLink href={route.href}>
              <div className="flex flex-col justify-center items-center h-14 w-20">
                {route.icon}
                <span className="mt-1">{route.text}</span>
              </div>
            </NavigationLink>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BottomNavigation;
