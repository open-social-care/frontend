import { HBox, VBox } from "@/components/containers";
import { Heading } from "@/components/ui";
import Button from "@/components/ui/Button";
import Search from "@/components/ui/Search";
import Skeleton from "@/components/ui/Skeleton";
import { t } from "@/lang";
import { ActionFlashes } from "@/action-flash/ActionFlashes";
import Organizations from "./_organizations";

interface PageProps {
  searchParams: {
    page: number;
    query: string;
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
          <Organizations {...searchParams} />
        </Skeleton>
      </VBox>
    </>
  );
}
