import { HBox } from "@/components/layouts/Containers";
import Link from "next/link";

export default function page() {
  return (
    <HBox>
      <Link href="/admin">Link to Admin</Link>

      <Link href="/manager">Link to Manager</Link>

      <Link href="/social-assistant">Link to Social assistant</Link>
    </HBox>
  );
}
