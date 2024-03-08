import React from "react";
import { twMerge } from "tailwind-merge";

export default function Fullscreen({
  children,
  className,
  ...rest
}: React.ComponentPropsWithoutRef<"div">) {
  return (
    <div
      className={twMerge(
        "flex h-screen flex-col bg-gray-100 bg-[url('/images/landing-page-background.svg')]",
        className,
      )}
      {...rest}
    >
      {children}
    </div>
  );
}
