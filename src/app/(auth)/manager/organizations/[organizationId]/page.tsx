import { Paper } from "@/components/containers";
import OrganizationMembers from "@/components/pages/OrganizationMembers";
import { Heading } from "@/components/ui";
import { roleNames, roles } from "@/enums/roles";
import { t } from "@/lang";

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

  return (
    <>
      {/* <Heading h1>{organization.name}</Heading> */}

      <Heading h1>Organização</Heading>

      <Paper className="mt-4">
        <Heading h2>{t("roles.manager")}</Heading>

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
        <Heading h2>{t("roles.social_assistants")}</Heading>

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
