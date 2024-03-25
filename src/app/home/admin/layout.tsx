import Layout from "@/components/layout";
import Sidebar from "@/components/layout/SideBar";
import type { Metadata } from "next";
import {
  AiOutlineHome,
  AiOutlineUsergroupAdd,
} from "react-icons/ai";
import { BsHouseHeart } from "react-icons/bs";
import {
  FaUserSecret,
  FaUsers,
} from "react-icons/fa";

export const metadata: Metadata = {
  title: "Admin",
};

const links = (
  <>
    <Sidebar.LinkGroup
      title="Admin"
      icon={<FaUserSecret />}
    >
      <Sidebar.Link
        href="/home/admin"
        icon={<AiOutlineHome />}
      >
        Inínio
      </Sidebar.Link>

      <Sidebar.Link
        href="/home/admin/organizations"
        icon={<BsHouseHeart />}
      >
        Organizações
      </Sidebar.Link>
    </Sidebar.LinkGroup>

    <Sidebar.LinkGroup
      title="Usuários"
      icon={<FaUsers />}
    >
      <Sidebar.Link
        href="/home/admin/managers"
        icon={<AiOutlineUsergroupAdd />}
      >
        Gestores
      </Sidebar.Link>
    </Sidebar.LinkGroup>
  </>
);

export default function layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <Sidebar.Root>{links}</Sidebar.Root>

      <Layout.Main>{children}</Layout.Main>
    </>
  );
}
