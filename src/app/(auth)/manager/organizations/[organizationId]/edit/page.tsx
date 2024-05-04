import { Paper } from "@/components/containers";
import { Heading } from "@/components/ui";
import { t } from "@/lang";
import { Organization } from "@/schemas";
import { fetchOrganizationAction } from "../_actions";
import { OrganizationUpdateForm } from "@/components/pages/OrganizationUpdateForm";
import { profiles } from "@/enums/profiles";

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
        <OrganizationUpdateForm
          profile={profiles.MANAGER}
          organization={organization}
        />
      </Paper>
    </>
  );
}
