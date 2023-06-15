import { NavigationLinkProps } from "@/components/NavigationLink";

import IconMovie from "@/icons/IconMovie";
import IconTrendingUp from "@/icons/IconTrendingUp";
import IconTv from "@/icons/IconTv";

export const routes: NavigationLinkProps[] = [
  {
    href: "/",
    icon: <IconTrendingUp />,
    text: "Trending",
  },
  {
    href: "/movies",
    icon: <IconMovie />,
    text: "Movies",
  },
  {
    href: "/tvs",
    icon: <IconTv />,
    text: "TV",
  },
];
