import { DashboardLayout } from "@/components/layouts";
import type { Metadata } from "next";
import AdminSideBar from "./_sidebar";

export const metadata: Metadata = {
  title: "Admin",
};

export default function layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <DashboardLayout.Root>
      <DashboardLayout.Navbar />

      <DashboardLayout.Content>
        <AdminSideBar />

        {children}
      </DashboardLayout.Content>

      <DashboardLayout.Footer />
    </DashboardLayout.Root>
  );
}
