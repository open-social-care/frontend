import React, { ReactNode } from "react";
import Text from "../Text";
import { twMerge } from "tailwind-merge";

type CardActionProps =
  | {
      onClick: () => void;
      href?: never;
      title: string;
      icon?: ReactNode;
    }
  | {
      onClick?: never;
      href: string;
      title: string;
      icon?: ReactNode;
    };

export default function CardAction({
  onClick,
  href,
  title,
  icon,
  className,
  ...rest
}: CardActionProps & React.ComponentPropsWithoutRef<"a">) {
  return (
    <a
      href={href}
      onClick={onClick}
      className={twMerge("flex flex-row items-center gap-2", className)}
      {...rest}
    >
      {icon}
      <Text>{title}</Text>
    </a>
  );
}
