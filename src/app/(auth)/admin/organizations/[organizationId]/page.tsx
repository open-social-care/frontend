import { Paper } from "@/components/containers";
import { Heading } from "@/components/ui";
import { User } from "@/schemas";
import { fetchUsersAction } from "../../users/_actions";
import FormAddMembers from "./_form-add-members";
import OrganizationUsers from "./_members";

interface PageProps {
  params: {
    organizationId: number;
  };
}

export default async function page({ params }: PageProps) {
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
          roleId={1}
        />

        <OrganizationUsers
          organizationId={params.organizationId}
          role="manager"
        />
      </Paper>

      <Paper className="mt-4">
        <Heading h2>Assistentes sociais</Heading>

        <FormAddMembers
          organizationId={params.organizationId}
          users={users}
          roleId={2}
        />

        <OrganizationUsers
          organizationId={params.organizationId}
          role="social-assistant"
        />
      </Paper>
    </>
  );
}
