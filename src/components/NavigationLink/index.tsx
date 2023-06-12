"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import classNames from "classnames";

export interface NavigationLinkProps {
  children?: React.ReactNode;
  href: string;
  icon?: React.ReactNode;
  text?: string;
}

const NavigationLink: React.FC<NavigationLinkProps> = ({ children, href }) => {
  const pathname = usePathname();
  const isActive = pathname === href;

  return (
    <Link
      href={href}
      className={classNames(
        "block w-full text-sm md:text-base capitalize hover:text-orange",
        isActive &&
          "font-bold  ml-4 border-t-4 md:border-r-4 md:border-t-0 border-orange",
        isActive ? "text-orange" : "text-white" // ternary here otherwise it's not possible to swap out for the right color due to CSS "colors" declaration order
      )}
    >
      {children}
    </Link>
  );
};

export default NavigationLink;
