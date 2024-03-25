import { twMerge } from "tailwind-merge";

export default function SidebarRoot({
  children,
  className,
  ...rest
}: React.ComponentPropsWithoutRef<"aside">) {
  return (
    <aside
      className={twMerge(
        "fixed hidden h-screen w-60 border-l border-r bg-white p-2 sm:w-64 md:flex",
        className,
      )}
      {...rest}
    >
      <nav className="mt-2 w-full">
        {children}
      </nav>
    </aside>
  );
}
