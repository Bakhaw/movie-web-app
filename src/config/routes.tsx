import { Clapperboard, Flame, Popcorn } from "lucide-react";

import { NavigationLinkProps } from "@/components/NavigationLink";

export const routes: NavigationLinkProps[] = [
  {
    href: "/",
    icon: <Flame className="h-4 w-4" />,
    text: "Trending",
  },
  {
    href: "/movies",
    icon: <Clapperboard className="h-4 w-4" />,
    text: "Movies",
  },
  {
    href: "/tvs",
    icon: <Popcorn className="h-4 w-4" />,
    text: "TV",
  },
];
