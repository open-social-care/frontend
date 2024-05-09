import { HBox, Paper } from "@/components/containers";
import OrganizationMembers from "@/components/pages/OrganizationMembers";
import { Button, CardAction, Heading, Text } from "@/components/ui";
import { roleNames, roles } from "@/enums/roles";
import { t } from "@/lang";
import { Organization } from "@/schemas";
import { fetchOrganizationAction } from "./_actions";
import { AiOutlineEdit } from "react-icons/ai";

interface PageProps {
  params: {
    organizationId: number;
  };
  searchParams: {
    managersPage: number;
    socialAssistantsPage: number;
  };
}

export default async function page({ params, searchParams }: PageProps) {
  const { data } = await fetchOrganizationAction(params.organizationId);

  const organization = Organization.parse(data);

  return (
    <>
      <Heading h1>{organization.name}</Heading>

      <Paper className="mt-4">
        <Text className="text-sm">
          {t(`document_types.${organization.document_type}`)}: {organization.document}
        </Text>

        {organization.phone && (
          <Text className="text-sm">
            {t("labels.phone")}: {organization.phone}
          </Text>
        )}

        <HBox className="mt-4 justify-end gap-4">
          <CardAction
            title={t("general_actions.edit")}
            href={`/manager/organizations/${organization.id}/edit`}
            icon={<AiOutlineEdit />}
          />
        </HBox>
      </Paper>

      <Paper className="mt-4">
        <Heading h2>{t("roles.managers")}</Heading>

        <OrganizationMembers
          profile={roleNames.MANAGER}
          //
          organizationId={params.organizationId}
          roleId={roles.MANAGER}
          //
          pageQueryName="managersPage"
          page={searchParams.managersPage}
        />
      </Paper>

      <Paper className="mt-4">
        <HBox className="justify-between">
          <Heading h2>{t("roles.social_assistants")}</Heading>

          <Button
            className="self-end"
            href={`/manager/organizations/${params.organizationId}/social-assistants/create`}
          >
            {t(`general_actions.create`)}
          </Button>
        </HBox>

        <OrganizationMembers
          profile={roleNames.MANAGER}
          //
          organizationId={params.organizationId}
          roleId={roles.SOCIAL_ASSISTANT}
          //
          pageQueryName="socialAssistantsPage"
          page={searchParams.socialAssistantsPage}
        />
      </Paper>
    </>
  );
}
