import { Clapperboard, Flame, Popcorn } from "lucide-react";

import { NavigationLinkProps } from "@/components/NavigationLink";

export const routes: NavigationLinkProps[] = [
  {
    href: "/",
    icon: <Flame className="mr-2 h-4 w-4" />,
    text: "Trending",
  },
  {
    href: "/movies",
    icon: <Clapperboard className="mr-2 h-4 w-4" />,
    text: "Movies",
  },
  {
    href: "/tvs",
    icon: <Popcorn className="mr-2 h-4 w-4" />,
    text: "TV",
  },
];
