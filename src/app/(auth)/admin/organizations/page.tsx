import { HBox, VBox } from "@/components/containers";
import { Heading } from "@/components/ui";
import Button from "@/components/ui/Button";
import Search from "@/components/ui/Search";
import Skeleton from "@/components/ui/Skeleton";
import { t } from "@/lang";
import { ActionFlashes } from "@/action-flash/ActionFlashes";
import OrganizationList from "@/components/pages/OrganizationList";
import { roleNames } from "@/enums/roles";

interface PageProps {
  searchParams: {
    page: number;
    search: string;
  };
}

export default function page({ searchParams }: PageProps) {
  return (
    <>
      <ActionFlashes />

      <HBox className="justify-between">
        <Heading h1>{t("page_titles.organizations")}</Heading>

        <Button href="/admin/organizations/create">{t("general_actions.create")}</Button>
      </HBox>

      <VBox className="mt-5">
        <Search />

        <Skeleton
          className="h-28"
          length={5}
        >
          <OrganizationList
            profile={roleNames.ADMIN}
            {...searchParams}
          />
        </Skeleton>
      </VBox>
    </>
  );
}
