import { HBox, VBox } from "@/components/containers";
import { Heading } from "@/components/ui";
import Button from "@/components/ui/Button";
import Search from "@/components/ui/Search";
import Skeleton from "@/components/ui/Skeleton";
import { t } from "@/lang";
import Users from "./_users";

interface PageProps {
  searchParams: {
    page: number;
    query: string;
  };
}

export default function page({ searchParams }: PageProps) {
  return (
    <>
      <VBox className="justify-between">
        <Heading>{t("page_titles.users")}</Heading>

        <Button href="/admin/users/create">{t("general_actions.create")}</Button>
      </VBox>

      <HBox className="mt-5">
        <Search />

        <Skeleton
          className="h-28"
          length={5}
        >
          <Users {...searchParams} />
        </Skeleton>
      </HBox>
    </>
  );
}
