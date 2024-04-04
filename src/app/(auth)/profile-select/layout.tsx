import type { Metadata } from "next";
import { DashboardLayout } from "@/components/layouts";
import { PropsWithChildren } from "react";

export const metadata: Metadata = {
  title: "Início",
};

export default function layout({ children }: PropsWithChildren) {
  return (
    <DashboardLayout.Root>
      <DashboardLayout.Navbar withoutSidebarToggle />

      <DashboardLayout.Content>{children}</DashboardLayout.Content>

      <DashboardLayout.Footer />
    </DashboardLayout.Root>
  );
}
