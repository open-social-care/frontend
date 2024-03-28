import Image from "next/image";
import Link from "next/link";

type LogoProps = {
  href: string;
};

export default function Logo({ href }: LogoProps) {
  return (
    <Link href={href}>
      <Image
        draggable={false}
        src="/images/logo.png"
        alt="logo"
        width="200"
        height="58" //keep aspect ratio from the original image
        priority
      />
    </Link>
  );
}
