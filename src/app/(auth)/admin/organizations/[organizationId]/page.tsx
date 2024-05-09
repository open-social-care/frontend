import { Paper } from "@/components/containers";
import OrganizationMembers from "@/components/pages/OrganizationMembers";
import { Heading } from "@/components/ui";
import { roleNames, roles } from "@/enums/roles";
import { t } from "@/lang";
import { Organization, User } from "@/schemas";
import { fetchNonMembersAction, fetchOrganizationAction } from "./_actions";
import FormAddMembers from "./_form-add-members";

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
  const { data: organizationData } = await fetchOrganizationAction(params.organizationId);

  console.log(organizationData);
  const organization = Organization.parse(organizationData);

  const { data: nonManagersData } = await fetchNonMembersAction(
    params.organizationId,
    roles.MANAGER,
  );

  const nonManagers = User.array().parse(nonManagersData);

  const { data: nonSocialAssistantsData } = await fetchNonMembersAction(
    params.organizationId,
    roles.SOCIAL_ASSISTANT,
  );

  const nonSocialAssistants = User.array().parse(nonSocialAssistantsData);

  return (
    <>
      <Heading h1>{organization.name}</Heading>

      <Paper className="mt-4">
        <Heading h2>{t("roles.managers")}</Heading>

        <FormAddMembers
          users={nonManagers}
          organizationId={params.organizationId}
          roleId={roles.MANAGER}
        />

        <OrganizationMembers
          profile={roleNames.ADMIN}
          //
          organizationId={params.organizationId}
          roleId={roles.MANAGER}
          //
          pageQueryName="managersPage"
          page={searchParams.managersPage}
        />
      </Paper>

      <Paper className="mt-4">
        <Heading h2>{t("roles.social_assistants")}</Heading>

        <FormAddMembers
          users={nonSocialAssistants}
          organizationId={params.organizationId}
          roleId={roles.SOCIAL_ASSISTANT}
        />

        <OrganizationMembers
          profile={roleNames.ADMIN}
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
