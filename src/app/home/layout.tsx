import auth from "@/auth";
import Layout from "@/components/layout";
import Navbar from "@/components/layout/Navbar/index.";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Início",
};

export default function layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const { user } = auth();

  return (
    <Layout.Root>
      <Navbar.Root>
        <Navbar.ProfileMenu user={user} />
      </Navbar.Root>

      <Layout.Page>{children}</Layout.Page>
    </Layout.Root>
  );
}
