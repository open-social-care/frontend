import Layout from "@/components/layout";
import Sidebar from "@/components/layout/SideBar";
import type { Metadata } from "next";
import {
  AiOutlineHome,
  AiOutlineUsergroupAdd,
} from "react-icons/ai";
import {
  BsFillPersonLinesFill,
  BsHouseHeart,
  BsPersonBadgeFill,
  BsPersonFillGear,
} from "react-icons/bs";
import { FaUsers } from "react-icons/fa";

export const metadata: Metadata = {
  title: "Gestor",
};

const links = (
  <>
    <Sidebar.LinkGroup
      title="Gestor"
      icon={<BsPersonFillGear />}
    >
      <Sidebar.Link
        href="/home/manager"
        icon={<AiOutlineHome />}
      >
        Inínio
      </Sidebar.Link>

      <Sidebar.Link
        href="/home/manager/organizations"
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
        href="/home/manager/social-assistants"
        icon={<AiOutlineUsergroupAdd />}
      >
        Assistentes Sociais
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
