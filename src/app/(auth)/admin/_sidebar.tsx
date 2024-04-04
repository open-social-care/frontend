import { DashboardLayout } from "@/components/layouts";

import { AiOutlineHome, AiOutlineUsergroupAdd } from "react-icons/ai";
import { BsHouseHeart } from "react-icons/bs";
import { FaUserSecret, FaUsers } from "react-icons/fa";

export default function AdminSideBar() {
  return (
    <DashboardLayout.SideBar.Root>
      <DashboardLayout.SideBar.LinkGroup
        title="Admin"
        icon={<FaUserSecret />}
      >
        <DashboardLayout.SideBar.Link
          href="/admin"
          icon={<AiOutlineHome />}
        >
          Início
        </DashboardLayout.SideBar.Link>

        <DashboardLayout.SideBar.Link
          href="/admin/organizations"
          icon={<BsHouseHeart />}
        >
          Organizações
        </DashboardLayout.SideBar.Link>
      </DashboardLayout.SideBar.LinkGroup>

      <DashboardLayout.SideBar.LinkGroup
        title="Usuários"
        icon={<FaUsers />}
      >
        <DashboardLayout.SideBar.Link
          href="/admin/managers"
          icon={<AiOutlineUsergroupAdd />}
        >
          Gestores
        </DashboardLayout.SideBar.Link>
      </DashboardLayout.SideBar.LinkGroup>
    </DashboardLayout.SideBar.Root>
  );
}
