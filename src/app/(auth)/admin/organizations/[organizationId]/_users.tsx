import { User } from "@/schemas";

import { Text } from "@/components/ui";
import Pagination from "@/components/ui/Pagination";
import { fetchUsersByRole } from "./_actions";

interface OrganizationUsersProps {
  organizationId: number;
  role: string;
  query?: string;
  page?: number;
}

export default async function OrganizationUsers({
  organizationId,
  role,
  query,
  page,
}: OrganizationUsersProps) {
  const { data, pagination } = await fetchUsersByRole(organizationId, role, query, page);

  const users = User.array().parse(data);

  return (
    <>
      {users.map((user) => (
        <>
          <Text className="font-semibold">{user.name}</Text>

          <Text className="text-sm">{user.email}</Text>
        </>
      ))}

      <Pagination paginate={pagination} />
    </>
  );
}
