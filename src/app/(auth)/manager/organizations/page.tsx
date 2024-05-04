import { ActionFlashes } from "@/action-flash/ActionFlashes";
import { VBox } from "@/components/containers";
import OrganizationList from "@/components/pages/OrganizationList";
import { Heading } from "@/components/ui";
import Search from "@/components/ui/Search";
import Skeleton from "@/components/ui/Skeleton";
import { profiles } from "@/enums/profiles";
import { t } from "@/lang";

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

      <Heading h1>{t("page_titles.organizations")}</Heading>

      <VBox className="mt-5">
        <Search />

        <Skeleton
          className="h-28"
          length={5}
        >
          <OrganizationList
            profile={profiles.MANAGER}
            {...searchParams}
          />
        </Skeleton>
      </VBox>
    </>
  );
}
