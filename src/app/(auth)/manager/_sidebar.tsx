import { DashboardLayout } from "@/components/layouts";
import { t } from "@/lang";

import { AiOutlineHome, AiOutlineUsergroupAdd } from "react-icons/ai";
import { BsHouseHeart, BsPersonFillGear } from "react-icons/bs";
import { FaUsers } from "react-icons/fa";

export default function ManagerSideBar() {
  return (
    <DashboardLayout.SideBar.Root>
      <DashboardLayout.SideBar.LinkGroup
        title="Gestor"
        icon={<BsPersonFillGear />}
      >
        <DashboardLayout.SideBar.Link
          href="/manager"
          icon={<AiOutlineHome />}
        >
          Início
        </DashboardLayout.SideBar.Link>

        <DashboardLayout.SideBar.Link
          href="/manager/organizations"
          icon={<BsHouseHeart />}
        >
          {t("page_titles.organizations")}
        </DashboardLayout.SideBar.Link>
      </DashboardLayout.SideBar.LinkGroup>

      <DashboardLayout.SideBar.LinkGroup
        title="Usuários"
        icon={<FaUsers />}
      >
        <DashboardLayout.SideBar.Link
          href="/manager/social-assistants"
          icon={<AiOutlineUsergroupAdd />}
        >
          Assistentes Sociais
        </DashboardLayout.SideBar.Link>
      </DashboardLayout.SideBar.LinkGroup>
    </DashboardLayout.SideBar.Root>
  );
}
