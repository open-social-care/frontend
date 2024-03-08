import { twMerge } from "tailwind-merge";

export default function PageBody({
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
