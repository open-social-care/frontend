import { User } from "@/schemas";

import { HBox, VBox } from "@/components/containers";
import { Text } from "@/components/ui";
import Pagination from "@/components/ui/Pagination";
import { fetchUsersByRole } from "./_actions";
import DissociateAction from "./_dissociate-action";

interface OrganizationMembersProps {
  organizationId: number;
  roleId: number;
  pageQueryName: string;
  query?: string;
  page?: number;
}

export default async function OrganizationMembers({
  organizationId,
  roleId,
  pageQueryName,
  query,
  page,
}: OrganizationMembersProps) {
  const { data, pagination } = await fetchUsersByRole(organizationId, roleId, query, page);

  const users = User.array().parse(data);

  if (users.length == 0) {
    return;
  }

  return (
    <div className="mt-4">
      {users.map((user) => (
        <HBox
          key={user.id}
          className="justify-between rounded-lg px-4 py-2 hover:bg-gray-50"
        >
          <VBox>
            <Text className="font-semibold">{user.name}</Text>

            <Text className="text-sm">{user.email}</Text>
          </VBox>

          <DissociateAction
            organizationId={organizationId}
            roleId={roleId}
            userId={user.id}
          />
        </HBox>
      ))}

      <Pagination
        paginate={pagination}
        queryName={pageQueryName}
      />
    </div>
  );
}
