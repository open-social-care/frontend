"use client";

import { DashboardLayout } from "@/components/layouts";
import { Roles } from "@/enums/Roles";
import { t } from "@/lang";
import { useParams } from "next/navigation";
import { AiOutlineUsergroupAdd } from "react-icons/ai";
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
        href={`/${Roles.SOCIAL_ASSISTANT}/organizations/${organizationId}/subjects`}
        icon={<AiOutlineUsergroupAdd />}
      >
        {"subjects_ref"}
      </DashboardLayout.SideBar.Link>
    </DashboardLayout.SideBar.LinkGroup>
  );
}
