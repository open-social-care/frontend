import { Paper } from "@/components/containers";
import { Heading } from "@/components/ui";
import { t } from "@/lang";
import { UpdateOrganizationForm } from "./_form";
import { fetchOrganizationAction } from "./_actions";
import { Organization } from "@/schemas";

interface PageProps {
  params: {
    organizationId: number;
  };
}

export default async function page({ params }: PageProps) {
  const { data } = await fetchOrganizationAction(params.organizationId);

  const organization = Organization.parse(data);

  return (
    <>
      <Heading h1>{t("page_titles.edit_organization")}</Heading>

      <Paper className="mt-4">
        <UpdateOrganizationForm organization={organization} />
      </Paper>
    </>
  );
}
