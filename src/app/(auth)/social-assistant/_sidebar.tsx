import { DashboardLayout } from "@/components/layouts";
import { t } from "@/lang";

import { AiOutlineHome } from "react-icons/ai";
import { BsFillPersonFill, BsHouseHeart } from "react-icons/bs";
import OrganizationLinks from "./_organization-links";

export default function SocialAssistantSideBar() {
  return (
    <DashboardLayout.SideBar.Root>
      <DashboardLayout.SideBar.LinkGroup
        title="Assistente Social"
        icon={<BsFillPersonFill />}
      >
        <DashboardLayout.SideBar.Link
          href="/social-assistant"
          icon={<AiOutlineHome />}
        >
          Início
        </DashboardLayout.SideBar.Link>

        <DashboardLayout.SideBar.Link
          href="/social-assistant/organizations"
          icon={<BsHouseHeart />}
        >
          {t("page_titles.organizations")}
        </DashboardLayout.SideBar.Link>
      </DashboardLayout.SideBar.LinkGroup>

      <OrganizationLinks />
    </DashboardLayout.SideBar.Root>
  );
}
