export default function Main({
  children,
  className,
  ...rest
}: React.ComponentPropsWithoutRef<"div">) {
  return (
    <div className="flex flex-1 flex-col overflow-y-auto">
      {children}
    </div>
  );
}
