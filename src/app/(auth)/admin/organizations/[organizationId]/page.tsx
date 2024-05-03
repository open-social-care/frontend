import { Paper } from "@/components/containers";
import { Heading } from "@/components/ui";
import { User } from "@/schemas";
import { fetchUsersAction } from "../../users/_actions";
import FormAddMembers from "./_form-add-members";
import OrganizationUsers from "./_members";
import { roles } from "@/enums/roles";

interface PageProps {
  params: {
    organizationId: number;
  };
  searchParams: {
    managersPage: number;
  };
}

export default async function page({ params, searchParams }: PageProps) {
  //const { data } = await fetchOrganizationAction(params.organizationId);

  //const organization = Organization.parse(data);

  const { data } = await fetchUsersAction();

  const users = User.array().parse(data);

  return (
    <>
      <Heading h1>Organização</Heading>

      <Paper className="mt-4">
        <Heading h2>Gestores</Heading>

        <FormAddMembers
          organizationId={params.organizationId}
          users={users}
          roleId={roles.MANAGER}
        />

        <OrganizationUsers
          organizationId={params.organizationId}
          role="manager"
          pageQueryName="managersPage"
        />
      </Paper>

      <Paper className="mt-4">
        <Heading h2>Assistentes sociais</Heading>

        <FormAddMembers
          organizationId={params.organizationId}
          users={users}
          roleId={roles.SOCIAL_ASSISTANT}
        />

        <OrganizationUsers
          organizationId={params.organizationId}
          role="social-assistant"
          pageQueryName="socialAssistantsPage"
        />
      </Paper>
    </>
  );
}
