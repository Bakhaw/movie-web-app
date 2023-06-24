import { usePathname } from "next/navigation";
import Link from "next/link";
import { Clapperboard, Heart, Gift, Popcorn } from "lucide-react";

import { routes } from "@/config/routes";

import { Button } from "@/components/ui/button";

function Sidebar() {
  const pathname = usePathname();

  return (
    <div className="pb-12 w-60">
      <div className="space-y-4 py-4">
        <div className="px-4 py-2">
          <h2 className="mb-2 px-2 text-lg font-semibold tracking-tight">
            Discover
          </h2>
          <div className="space-y-1">
            {routes.map((route) => (
              <Link key={route.text} href={route.href}>
                <Button
                  variant={pathname === route.href ? "secondary" : "ghost"}
                  size="sm"
                  className="w-full justify-start"
                >
                  <div className="mr-2">{route.icon}</div>
                  <span>{route.text}</span>
                </Button>
              </Link>
            ))}
          </div>
        </div>
        <div className="px-4 py-2">
          <h2 className="mb-2 px-2 text-lg font-semibold tracking-tight">
            Library
          </h2>
          <div className="space-y-1">
            <Button variant="ghost" size="sm" className="w-full justify-start">
              <Heart className="mr-2 h-4 w-4" />
              Liked
            </Button>
            <Button variant="ghost" size="sm" className="w-full justify-start">
              <Gift className="mr-2 h-4 w-4" />
              Made for You
            </Button>
            <Button variant="ghost" size="sm" className="w-full justify-start">
              <Clapperboard className="mr-2 h-4 w-4" />
              Movies
            </Button>
            <Button variant="ghost" size="sm" className="w-full justify-start">
              <Popcorn className="mr-2 h-4 w-4" />
              TV
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
