import { twMerge } from "tailwind-merge";

export default function Root({
  children,
  className,
  ...rest
}: React.ComponentPropsWithoutRef<"div">) {
  return (
    <div
      className={twMerge(
        "flex h-screen bg-gray-100",
        className,
      )}
      {...rest}
    >
      {children}
    </div>
  );
}
