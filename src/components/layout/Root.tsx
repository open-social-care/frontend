import { twMerge } from "tailwind-merge";

export default function Root({
  children,
  className,
  ...rest
}: React.ComponentPropsWithoutRef<"div">) {
  return (
    <div
      className={twMerge(
        "flex h-screen flex-col",
        className,
      )}
      {...rest}
    >
      {children}
    </div>
  );
}
