import Layout from "@/components/layout";
import SideBarLink from "@/components/layout/SideBarLink";
import SideBarLinkGroup from "@/components/layout/SideBarLinkGroup";
import { CgUserList } from "react-icons/cg";

export default function layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <Layout.Root>
      <Layout.SideBar
        links={
          <>
            <SideBarLink
              icon={<CgUserList />}
              subGroup={
                <SideBarLink subLink>
                  Sublink do primeiro
                </SideBarLink>
              }
            >
              Primeiro link
            </SideBarLink>

            <SideBarLink icon={<CgUserList />}>
              Link alone
            </SideBarLink>

            <SideBarLinkGroup title="Grupo">
              <SideBarLink icon={<CgUserList />}>
                1° do grupo
              </SideBarLink>

              <SideBarLink icon={<CgUserList />}>
                2° do grupo
              </SideBarLink>
            </SideBarLinkGroup>

            <SideBarLinkGroup title="Grupo com Sublink">
              <SideBarLink
                icon={<CgUserList />}
                subGroup={
                  <SideBarLink subLink>
                    Sublink do 1°
                  </SideBarLink>
                }
              >
                1° do grupo
              </SideBarLink>

              <SideBarLink icon={<CgUserList />}>
                Outro link
              </SideBarLink>
            </SideBarLinkGroup>
          </>
        }
      />

      <Layout.Main>
        <Layout.NavbarHeader />

        <Layout.PageBody>
          {children}
        </Layout.PageBody>
      </Layout.Main>
    </Layout.Root>
  );
}
