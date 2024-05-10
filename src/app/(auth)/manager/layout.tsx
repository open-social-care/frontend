import { DashboardLayout } from "@/components/layouts";
import type { Metadata } from "next";
import ManagerSideBar from "./_sidebar";
import { PropsWithChildren } from "react";
import { t } from "@/lang";

export const metadata: Metadata = {
  title: t("roles.manager"),
};

export default function layout({ children }: PropsWithChildren) {
  return (
    <DashboardLayout.Root>
      <DashboardLayout.Navbar />

      <DashboardLayout.Content>
        <ManagerSideBar />

        <DashboardLayout.Main>{children}</DashboardLayout.Main>
      </DashboardLayout.Content>

      <DashboardLayout.Footer />
    </DashboardLayout.Root>
  );
}
