import Layout from "@/components/layout";
import Navbar from "@/components/layout/Navbar/index.";
import Sidebar from "@/components/layout/SideBar";
import { PropsWithChildren } from "react";
import { CgUserList } from "react-icons/cg";

interface ManagerLayoutProps
  extends PropsWithChildren {
  linkActive?:
    | "subjects"
    | "subjects-create"
    | "link-2";
}

export default function ManagerLayout({
  linkActive,
  children,
}: ManagerLayoutProps) {
  return (
    <Layout.Root>
      <Sidebar.Root>
        <Sidebar.LinksRoot>
          <Sidebar.Link
            href="#"
            icon={<CgUserList />}
            active={
              linkActive == "subjects-create" ||
              linkActive == "subjects"
            }
            subGroup={
              <Sidebar.Link
                href="#"
                subLink
                active={
                  linkActive == "subjects-create"
                }
              >
                Cadastrar
              </Sidebar.Link>
            }
          >
            Sujeitos
          </Sidebar.Link>

          <Sidebar.Link
            href="#"
            active={linkActive == "link-2"}
            icon={<CgUserList />}
          >
            Link alone
          </Sidebar.Link>

          <Sidebar.LinkGroup title="Grupo">
            <Sidebar.Link
              href="/manager"
              active
              icon={<CgUserList />}
            >
              1° do grupo
            </Sidebar.Link>

            <Sidebar.Link
              href="#"
              icon={<CgUserList />}
            >
              2° do grupo
            </Sidebar.Link>
          </Sidebar.LinkGroup>

          <Sidebar.LinkGroup title="Grupo com Sublink">
            <Sidebar.Link
              href="#"
              icon={<CgUserList />}
              subGroup={
                <Sidebar.Link
                  href="#"
                  subLink
                >
                  Sublink do 1°
                </Sidebar.Link>
              }
            >
              1° do grupo
            </Sidebar.Link>

            <Sidebar.Link
              href="#"
              icon={<CgUserList />}
            >
              Outro link
            </Sidebar.Link>
          </Sidebar.LinkGroup>
        </Sidebar.LinksRoot>
      </Sidebar.Root>

      <Layout.Main>
        <Navbar.Root>
          <Navbar.ProfileMenu />
        </Navbar.Root>

        <Layout.Page>{children}</Layout.Page>
      </Layout.Main>
    </Layout.Root>
  );
}
