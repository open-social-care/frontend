import React from "react";
import { twMerge } from "tailwind-merge";

export default function SideBarLinksRoot({
  children,
  className,
  ...rest
}: React.ComponentPropsWithoutRef<"nav">) {
  return (
    <nav
      className={twMerge("-mx-3 mt-4", className)}
      {...rest}
    >
      {children}
    </nav>
  );
}
