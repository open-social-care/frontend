import { Paper } from "@/components/containers";
import { Heading } from "@/components/ui";
import { roleNames, roles } from "@/enums/roles";
import { t } from "@/lang";
import { User } from "@/schemas";
import { fetchUsersAction } from "../../users/_actions";
import FormAddMembers from "./_form-add-members";
import OrganizationMembers from "@/components/pages/OrganizationMembers";

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
  //const { data } = await fetchOrganizationAction(params.organizationId);

  //const organization = Organization.parse(data);

  const { data } = await fetchUsersAction();

  const users = User.array().parse(data);

  return (
    <>
      {/* <Heading h1>{organization.name}</Heading> */}

      <Heading h1>Organização</Heading>

      <Paper className="mt-4">
        <Heading h2>{t("roles.manager")}</Heading>

        <FormAddMembers
          users={users}
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
          users={users}
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
