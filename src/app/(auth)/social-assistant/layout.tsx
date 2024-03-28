import { DashboardLayout } from "@/components/layouts";
import type { Metadata } from "next";
import SocialAssistantSideBar from "./_sidebar";
import { PropsWithChildren } from "react";

export const metadata: Metadata = {
  title: "Social Assistant",
};

export default function layout({ children }: PropsWithChildren) {
  return (
    <DashboardLayout.Root>
      <DashboardLayout.Navbar />

      <DashboardLayout.Content>
        <SocialAssistantSideBar />

        {children}
      </DashboardLayout.Content>

      <DashboardLayout.Footer />
    </DashboardLayout.Root>
  );
}
