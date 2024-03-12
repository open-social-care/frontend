import Link, { LinkProps } from "next/link";
import React from "react";
import { twMerge } from "tailwind-merge";

type SideBarLinkProps = {
  icon?: React.ReactNode;
  subLink?: boolean;
  subGroup?: React.ReactNode;
  active?: boolean;
} & LinkProps &
  React.ComponentPropsWithoutRef<"a">;

export default function SideBarLink({
  children,
  className,
  icon,
  subLink,
  subGroup,
  active,
  ...rest
}: SideBarLinkProps) {
  return (
    <>
      <Link
        className={twMerge(
          "flex transform items-center rounded-md px-3 py-2 text-gray-600 transition-colors duration-300 hover:bg-gray-100 hover:text-gray-700",
          active && "text-teal-600",
          !subGroup && active && "bg-teal-100",
          className,
        )}
        {...rest}
      >
        <span className="h-5 w-5">{icon}</span>

        <span
          className={`text-md mx-2 ${!subLink && "font-medium"}`}
        >
          {children}
        </span>
      </Link>

      {subGroup && (
        <div className="mb-4 text-sm">
          {subGroup}
        </div>
      )}
    </>
  );
}
