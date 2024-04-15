import { HBox, VBox } from "@/components/containers";
import { Heading } from "@/components/ui";
import Button from "@/components/ui/Button";
import Search from "@/components/ui/Search";
import { Suspense } from "react";
import Users from "./_users";
import Skeletons from "./_skeletons";
import { t } from "@/lang";

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

        <Button href="/admin/users/create">Cadastrar</Button>
      </VBox>

      <HBox className="mt-5">
        <Search />

        <Suspense fallback={<Skeletons />}>
          <Users {...searchParams} />
        </Suspense>
      </HBox>
    </>
  );
}
