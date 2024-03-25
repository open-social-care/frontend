import Link from "next/link";

export default function page() {
  return (
    <div className="m-5 flex flex-col">
      <Link href="/home/admin">
        Link to Admin
      </Link>

      <Link href="/home/manager">
        Link to Manager
      </Link>

      <Link href="/home/social-assistant">
        Link to Social assistant
      </Link>
    </div>
  );
}
