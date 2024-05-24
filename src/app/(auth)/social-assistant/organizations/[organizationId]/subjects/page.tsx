import { ActionFlashes } from "@/action-flash/ActionFlashes";
import { HBox, VBox } from "@/components/containers";
import { Button, Heading, Search, Skeleton } from "@/components/ui";
import { Roles } from "@/enums/Roles";
import { t } from "@/lang";
import SubjectList from "./_subjects";

interface PageProps {
  params: {
    organizationId: number;
  };
  searchParams: {
    page: number;
    search: string;
  };
}

export default function page({ params, searchParams }: PageProps) {
  return (
    <>
      <ActionFlashes />

      <HBox className="justify-between">
        <Heading h1>{"subjects_ref"}</Heading>

        <Button
          href={`/${Roles.SOCIAL_ASSISTANT}/organizations/${params.organizationId}/subjects/create`}
        >
          {t("general_actions.create")}
        </Button>
      </HBox>

      <VBox className="mt-5">
        <Search />

        <Skeleton
          className="h-28"
          length={5}
        >
          <SubjectList
            organizationId={params.organizationId}
            {...searchParams}
          />
        </Skeleton>
      </VBox>
    </>
  );
}
