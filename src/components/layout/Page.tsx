import { twMerge } from "tailwind-merge";

export default function Page({
  children,
  className,
  ...rest
}: React.ComponentPropsWithoutRef<"div">) {
  return (
    <div
      className={twMerge(
        "flex min-h-screen pt-16",
        className,
      )}
      {...rest}
    >
      {children}
    </div>
  );
}
