import { DashboardLayout } from "@/components/layouts";
import { t } from "@/lang";

import { Roles } from "@/enums/Roles";
import { BsHouseHeart, BsPersonFillGear } from "react-icons/bs";
import OrganizationLinks from "./_organization-links";

export default async function ManagerSideBar() {
  return (
    <DashboardLayout.SideBar.Root>
      <DashboardLayout.SideBar.LinkGroup
        title={t("roles.manager")}
        icon={<BsPersonFillGear />}
      >
        <DashboardLayout.SideBar.Link
          href={`/${Roles.MANAGER}/organizations`}
          icon={<BsHouseHeart />}
        >
          {t("page_titles.organizations")}
        </DashboardLayout.SideBar.Link>
      </DashboardLayout.SideBar.LinkGroup>

      <OrganizationLinks />
    </DashboardLayout.SideBar.Root>
  );
}
