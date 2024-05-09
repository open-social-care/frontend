import { Profile, User } from "@/schemas";

import { HBox, VBox } from "@/components/containers";
import { Text } from "@/components/ui";
import Pagination from "@/components/ui/Pagination";
import DissociateAction from "./_dissociate-action";
import { fetchUsersByRole } from "./actions";
import { t } from "@/lang";

interface OrganizationMembersProps {
  profile: Profile;
  organizationId: number;
  roleId: number;
  search?: string;
  page?: number;
  pageQueryName: string;
}

export default async function OrganizationMembers({
  profile,
  organizationId,
  roleId,
  search,
  page,
  pageQueryName,
}: OrganizationMembersProps) {
  const { data, pagination } = await fetchUsersByRole(
    profile,
    organizationId,
    roleId,
    search,
    page,
  );

  const users = User.array().parse(data);

  if (users.length == 0) {
    return <Text className="mt-4">{t("informations.users_not_found")}</Text>;
  }

  return (
    <div className="mt-4">
      {users.map((user) => (
        <VBox
          key={user.id}
          className="rounded-lg px-4 py-2 hover:bg-gray-50 sm:flex-row sm:justify-between"
        >
          <VBox>
            <Text className="font-semibold">{user.name}</Text>

            <Text className="text-sm">{user.email}</Text>
          </VBox>

          {profile == "admin" && (
            <HBox className="justify-end">
              <DissociateAction
                organizationId={organizationId}
                roleId={roleId}
                userId={user.id}
              />
            </HBox>
          )}
        </VBox>
      ))}

      <Pagination
        paginate={pagination}
        queryName={pageQueryName}
      />
    </div>
  );
}
