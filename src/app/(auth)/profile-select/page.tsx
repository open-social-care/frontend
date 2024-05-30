import auth from "@/auth";
import { VBox } from "@/components/containers";
import SideBarLink from "@/components/layouts/DashboardLayout/SideBar/SideBarLink";
import { Heading } from "@/components/ui";
import { Roles } from "@/enums/Roles";
import { t } from "@/lang";
import Image from "next/image";
import { FaUserSecret } from "react-icons/fa";
import { FaGear, FaUserLarge } from "react-icons/fa6";

export default async function page() {
  const { user } = await auth();

  return (
    <div className="m-10 flex flex-col-reverse items-center lg:flex-row">
      <div className="lg:w-[50%]">
        <Heading h1>{t("page_titles.profile_select", { name: user.name })}</Heading>

        <VBox className="mt-4">
          {user.roles_ids?.includes(1) && (
            <SideBarLink
              icon={<FaUserSecret />}
              href={`/${Roles.ADMIN}`}
            >
              {t(`roles.${Roles.ADMIN}`)}
            </SideBarLink>
          )}

          {user.roles_ids?.includes(2) && (
            <SideBarLink
              icon={<FaGear />}
              href={`/${Roles.MANAGER}`}
            >
              {t(`roles.${Roles.MANAGER}`)}
            </SideBarLink>
          )}

          {user.roles_ids?.includes(3) && (
            <SideBarLink
              icon={<FaUserLarge />}
              href={`/${Roles.SOCIAL_ASSISTANT}`}
            >
              {t(`roles.${Roles.SOCIAL_ASSISTANT}`)}
            </SideBarLink>
          )}
        </VBox>
      </div>

      <Image
        className="w-full sm:mb-16 sm:w-[50%]"
        src="/images/landing-page-image.svg"
        alt="landing-page"
        width="4000"
        height="2667"
        priority
      />
    </div>
  );
}
