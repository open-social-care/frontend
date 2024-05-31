import { DashboardLayout } from "@/components/layouts";
import { t } from "@/lang";

import { Roles } from "@/enums/Roles";
import { BsHouseHeart } from "react-icons/bs";
import { FaUserLarge } from "react-icons/fa6";
import OrganizationLinks from "./_organization-links";

export default function SocialAssistantSideBar() {
  return (
    <DashboardLayout.SideBar.Root>
      <DashboardLayout.SideBar.LinkGroup
        title="Assistente Social"
        icon={<FaUserLarge />}
      >
        {/* <DashboardLayout.SideBar.Link
          href="/social-assistant"
          icon={<AiOutlineHome />}
        >
          Início
        </DashboardLayout.SideBar.Link> */}

        <DashboardLayout.SideBar.Link
          href={`/${Roles.SOCIAL_ASSISTANT}/organizations`}
          icon={<BsHouseHeart />}
        >
          {t("page_titles.organizations")}
        </DashboardLayout.SideBar.Link>
      </DashboardLayout.SideBar.LinkGroup>

      <OrganizationLinks />
    </DashboardLayout.SideBar.Root>
  );
}
