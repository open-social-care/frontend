import { DashboardLayout } from "@/components/layouts";

import { AiOutlineHome, AiOutlineTeam } from "react-icons/ai";
import { BsHouseHeart } from "react-icons/bs";
import { FaUserSecret } from "react-icons/fa";

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

        <DashboardLayout.SideBar.Link
          href="/admin/users"
          icon={<AiOutlineTeam />}
        >
          Usuários
        </DashboardLayout.SideBar.Link>
      </DashboardLayout.SideBar.LinkGroup>
    </DashboardLayout.SideBar.Root>
  );
}
