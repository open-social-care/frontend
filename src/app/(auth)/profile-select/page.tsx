import { VBox } from "@/components/containers";
import Link from "next/link";

export default function page() {
  return (
    <VBox>
      <Link href="/admin">Link to Admin</Link>

      <Link href="/manager">Link to Manager</Link>

      <Link href="/social-assistant">Link to Social assistant</Link>
    </VBox>
  );
}
