"use client";

import { DashboardLayout } from "@/components/layouts";
import { Roles } from "@/enums/Roles";
import { t } from "@/lang";
import { useParams } from "next/navigation";
import { AiOutlineFileDone } from "react-icons/ai";
import { FaUser } from "react-icons/fa";

export default function SubjctLinks() {
  const { organizationId, subjectId } = useParams<{ organizationId?: string; subjectId: string }>();

  if (!organizationId || !subjectId) return;

  return (
    <DashboardLayout.SideBar.LinkGroup
      title={"Subject"}
      icon={<FaUser />}
    >
      <DashboardLayout.SideBar.Link
        href={`/${Roles.SOCIAL_ASSISTANT}/organizations/${organizationId}/subjects/${subjectId}/form-answers`}
        icon={<AiOutlineFileDone />}
      >
        {t("page_titles.filled_forms")}
      </DashboardLayout.SideBar.Link>
    </DashboardLayout.SideBar.LinkGroup>
  );
}
