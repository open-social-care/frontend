import React from "react";
import { twMerge } from "tailwind-merge";

type SideBarLinkProps = {
  icon?: React.ReactNode;
  subLink?: boolean;
  subGroup?: React.ReactNode;
} & React.ComponentPropsWithoutRef<"a">;

export default function SideBarLink({
  children,
  className,
  icon,
  subLink,
  subGroup,
  ...rest
}: SideBarLinkProps) {
  return (
    <>
      <a
        className={twMerge(
          "flex transform cursor-pointer items-center rounded-md px-3 py-2 text-gray-600 transition-colors duration-300 hover:bg-gray-100 hover:text-gray-700",
          className,
        )}
        {...rest}
      >
        <span className="h-5 w-5">{icon}</span>

        <span
          className={`font-${subLink ? "small" : "medium"} mx-2 text-sm`}
        >
          {children}
        </span>
      </a>

      {subGroup && (
        <div className="mb-4">{subGroup}</div>
      )}
    </>
  );
}
