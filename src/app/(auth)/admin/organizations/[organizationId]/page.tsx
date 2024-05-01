import { Paper } from "@/components/containers";
import { Heading } from "@/components/ui";
import OrganizationUsers from "./_users";

interface PageProps {
  params: {
    organizationId: number;
  };
}

export default async function page({ params }: PageProps) {
  //const { data } = await fetchOrganizationAction(params.organizationId);

  //const organization = Organization.parse(data);

  return (
    <>
      <Heading h1>Organização</Heading>

      <Paper className="mt-4">
        <OrganizationUsers
          organizationId={params.organizationId}
          role="manager"
        />
      </Paper>
    </>
  );
}
