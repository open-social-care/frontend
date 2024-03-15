import { twMerge } from "tailwind-merge";

export default function Page({
  children,
  className,
  ...rest
}: React.ComponentPropsWithoutRef<"div">) {
  return (
    <div
      className={twMerge("p-4", className)}
      {...rest}
    >
      {children}
    </div>
  );
}
