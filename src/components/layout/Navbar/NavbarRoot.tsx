import Image from "next/image";
import Link from "next/link";
import { twMerge } from "tailwind-merge";

export default function NavbarHeader({
  children,
  className,
  ...rest
}: React.ComponentPropsWithoutRef<"div">) {
  return (
    <div
      className={twMerge(
        "fixed flex h-16 w-full items-center justify-between border-b border-gray-200 bg-white px-2",
        className,
      )}
      {...rest}
    >
      <Link href="#">
        <Image
          draggable={false}
          src="/images/logo.png"
          alt="logo"
          width="200"
          height="200"
        />
      </Link>

      {children}
    </div>
  );
}
