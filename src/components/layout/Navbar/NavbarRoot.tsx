import { twMerge } from "tailwind-merge";

export default function NavbarHeader({
  children,
  className,
  ...rest
}: React.ComponentPropsWithoutRef<"div">) {
  return (
    <div
      className={twMerge(
        "flex h-16 items-center justify-end border-b border-gray-200 bg-white",
        className,
      )}
      {...rest}
    >
      <div className="mr-4 mt-0 flex items-center">
        {children}
      </div>
    </div>
  );
}
