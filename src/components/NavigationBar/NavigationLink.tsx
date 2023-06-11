"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import classNames from "classnames";

export interface NavigationLinkProps {
  href: string;
  text: string;
}

const NavigationLink: React.FC<NavigationLinkProps> = ({ href, text }) => {
  const pathname = usePathname();
  const isActive = pathname === href;

  return (
    <Link
      href={href}
      className={classNames(
        "block w-full text-sm md:text-base capitalize",
        isActive && "font-bold  ml-4 border-r-4 border-orange",
        isActive ? "text-orange" : "text-white" // ternary here otherwise it's not possible to swap out for the right color due to CSS "colors" declaration order
      )}
    >
      {text}
    </Link>
  );
};

export default NavigationLink;
