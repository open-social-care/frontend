import { HBox, Paper } from "@/components/containers";
import { AiOutlineEdit } from "react-icons/ai";

import { t } from "@/lang";
import { Organization } from "@/schemas";

import { Text } from "@/components/ui";
import CardAction from "@/components/ui/CardAction";
import Pagination from "@/components/ui/Pagination";
import { fetchOrganizationsAction } from "./_actions";

interface OrganizationListProps {
  query?: string;
  page?: number;
}

export default async function Organizations({ query, page }: OrganizationListProps) {
  const { data, pagination } = await fetchOrganizationsAction(query, page);

  const organizations = Organization.array().parse(data);

  return (
    <>
      {organizations.map((organization) => (
        <Paper
          className="mt-1"
          key={organization.id}
        >
          <Text className="font-semibold">{organization.name}</Text>
          <Text className="text-sm">
            {t(`document_types.${organization.document_type}`)}: {organization.document}
          </Text>

          <HBox className="mt-4 justify-end gap-4">
            <CardAction
              title={t("general_actions.edit")}
              href={`/admin/organizations/${organization.id}/edit`}
              icon={<AiOutlineEdit />}
            />
          </HBox>
        </Paper>
      ))}

      <Pagination paginate={pagination} />
    </>
  );
}
