import { User } from "@/schemas";

import { Text } from "@/components/ui";
import Pagination from "@/components/ui/Pagination";
import { fetchUsersByRole } from "./_actions";
import { HBox } from "@/components/containers";

interface OrganizationMembersProps {
  organizationId: number;
  role: string;
  query?: string;
  page?: number;
}

export default async function OrganizationMembers({
  organizationId,
  role,
  query,
  page,
}: OrganizationMembersProps) {
  const { data, pagination } = await fetchUsersByRole(organizationId, role, query, page);

  const users = User.array().parse(data);

  if (users.length == 0) {
    return;
  }

  return (
    <>
      {users.map((user) => (
        <HBox key={user.id}>
          <Text className="font-semibold">{user.name}</Text>

          <Text className="text-sm">{user.email}</Text>
        </HBox>
      ))}

      <Pagination paginate={pagination} />
    </>
  );
}
