import { twMerge } from "tailwind-merge";

export default function Main({
  children,
  className,
  ...rest
}: React.ComponentPropsWithoutRef<"main">) {
  return (
    <main
      className={twMerge(
        "w-full overflow-y-auto bg-gray-100 p-4 md:ml-64",
        className,
      )}
      {...rest}
    >
      {children}
    </main>
  );
}
