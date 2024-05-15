"use client";

import { DashboardLayout } from "@/components/layouts";
import { t } from "@/lang";
import { useParams } from "next/navigation";
import { AiOutlineSnippets } from "react-icons/ai";
import { BsFillHouseGearFill } from "react-icons/bs";

export default function OrganizationLinks() {
  const { organizationId } = useParams<{ organizationId?: string }>();

  if (!organizationId) return;

  return (
    <DashboardLayout.SideBar.LinkGroup
      title={t("labels.organization")}
      icon={<BsFillHouseGearFill />}
    >
      <DashboardLayout.SideBar.Link
        href={`/manager/organizations/${organizationId}/form-templates`}
        icon={<AiOutlineSnippets />}
      >
        {t("labels.templates")}
      </DashboardLayout.SideBar.Link>
    </DashboardLayout.SideBar.LinkGroup>
  );
}
