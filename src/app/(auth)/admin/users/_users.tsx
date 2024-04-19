import { Paper, VBox } from "@/components/containers";
import { AiOutlineUser } from "react-icons/ai";

import { t } from "@/lang";
import { User } from "@/schemas";

import { fetchUsersAction } from "./_actions";
import Pagination from "@/components/ui/Pagination";

interface UserListProps {
  query?: string;
  page?: number;
}

export default async function Users({ query, page }: UserListProps) {
  // -------------TODO: remove this, only for testing
  async function timeout(ms: number) {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }
  //await timeout(10000);
  await timeout(0);
  // -------------

  const { data, pagination } = await fetchUsersAction(query, page);

  const users = User.array().parse(data);

  return (
    <>
      {users.map((user) => (
        <Paper
          className="mt-1"
          key={user.id}
        >
          <div className="flex">
            <div className="flex h-9 w-9 items-center justify-center rounded-full object-cover">
              <AiOutlineUser size={22} />
            </div>

            <div className="min-w-40 text-start">
              <p className="truncate text-sm font-semibold">{user.name}</p>
              <p className="truncate text-sm text-gray-600">{user.email}</p>
            </div>
          </div>

          <div className="mt-2">
            {user.roles?.map((role) => (
              <span
                key={role}
                className="rounded-xl bg-teal-100 p-1 px-2 font-semibold text-teal-900"
              >
                {role}
              </span>
            ))}
          </div>

          <VBox className="mt-4">
            <a href={`/admin/users/${user.id}/edit`}>{t("general_actions.edit")}</a>
          </VBox>
        </Paper>
      ))}

      <Pagination paginate={pagination} />
    </>
  );
}
