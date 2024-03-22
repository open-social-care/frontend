import auth from "@/auth";
import Layout from "@/components/layout";
import Navbar from "@/components/layout/Navbar/index.";
import Sidebar from "@/components/layout/SideBar";
import { PropsWithChildren } from "react";
import {
  AiFillFolder,
  AiOutlineFileExcel,
  AiOutlineFileImage,
  AiOutlineHome,
} from "react-icons/ai";
import {
  BsFillPersonLinesFill,
  BsHouseHeart,
} from "react-icons/bs";

interface ManagerLayoutProps
  extends PropsWithChildren {
  linkActive?:
    | "manager"
    | "organizations"
    | "documents"
    | "images";
}

export default async function ManagerLayout({
  linkActive,
  children,
}: ManagerLayoutProps) {
  const { user } = auth();

  return (
    <Layout.Root>
      <Sidebar.Root>
        <Sidebar.LinksRoot>
          <Sidebar.LinkGroup
            title="Gestor"
            icon={<BsFillPersonLinesFill />}
          >
            <Sidebar.Link
              href="/manager"
              active={linkActive == "manager"}
              icon={<AiOutlineHome />}
            >
              Inínio
            </Sidebar.Link>

            <Sidebar.Link
              href="/manager/organizations"
              active={
                linkActive == "organizations"
              }
              icon={<BsHouseHeart />}
            >
              Organizações
            </Sidebar.Link>
          </Sidebar.LinkGroup>

          <Sidebar.LinkGroup
            title="Minha pasta"
            icon={<AiFillFolder />}
          >
            <Sidebar.Link
              href="/manager/documents-example"
              active={linkActive == "documents"}
              icon={<AiOutlineFileExcel />}
            >
              Documentos
            </Sidebar.Link>

            <Sidebar.Link
              href="/manager/images-example"
              active={linkActive == "images"}
              icon={<AiOutlineFileImage />}
            >
              Imagens
            </Sidebar.Link>
          </Sidebar.LinkGroup>
        </Sidebar.LinksRoot>
      </Sidebar.Root>

      <Layout.Main>
        <Navbar.Root>
          <Navbar.ProfileMenu user={user} />
        </Navbar.Root>

        <Layout.Page>{children}</Layout.Page>
      </Layout.Main>
    </Layout.Root>
  );
}
