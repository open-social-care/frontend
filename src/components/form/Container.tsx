import { twMerge } from "tailwind-merge";

export default function Container({
  children,
  className,
  ...rest
}: React.ComponentPropsWithoutRef<"div">) {
  return (
    <div
      {...rest}
      className={twMerge(
        "w-full rounded-lg border bg-white p-4 shadow-md sm:w-72",
        className,
      )}
    >
      {children}
    </div>
  );
}
