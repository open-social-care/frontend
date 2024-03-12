import { twMerge } from "tailwind-merge";

export default function Main({
  children,
  className,
  ...rest
}: React.ComponentPropsWithoutRef<"div">) {
  return (
    <div
      className={twMerge(
        "flex flex-1 flex-col overflow-y-auto",
        className,
      )}
      {...rest}
    >
      {children}
    </div>
  );
}
