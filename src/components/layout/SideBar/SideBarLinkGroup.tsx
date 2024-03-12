type SideBarLinkGroupProps = {
  title: string;
} & React.ComponentPropsWithoutRef<"div">;

export default function SideBarLinkGroup({
  children,
  title,
  ...rest
}: SideBarLinkGroupProps) {
  return (
    <div
      className="mt-4 rounded-md border"
      {...rest}
    >
      {title && (
        <label className="px-3 text-xs uppercase text-gray-500 dark:text-gray-400">
          {title}
        </label>
      )}

      {children}
    </div>
  );
}
