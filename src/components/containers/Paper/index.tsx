import { twMerge } from "tailwind-merge";

export default function Paper({
  children,
  className,
  ...rest
}: React.ComponentPropsWithoutRef<"div">) {
  return (
    <div
      className={twMerge("rounded-lg border bg-white p-4 shadow-md", className)}
      {...rest}
    >
      {children}
    </div>
  );
}
