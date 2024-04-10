import { Paper, VBox } from "@/components/containers";
import Button from "@/components/ui/Button";
import { AiOutlineUser } from "react-icons/ai";

import Pagination from "@/components/ui/Pagination";
import { User } from "@/schemas";
import { fetchUsersAction } from "./_actions";

interface UsersProps {
  query?: string;
  page?: number;
}

export default async function Users(props: UsersProps) {
  const { data, pagination } = await fetchUsersAction(props);

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
              <span className="rounded-xl bg-teal-100 p-1 px-2 font-semibold text-teal-900">
                {role}
              </span>
            ))}
          </div>

          <VBox className="mt-4">
            <a href="#">Editar</a>
          </VBox>
        </Paper>
      ))}

      <Pagination paginate={pagination} />
    </>
  );
}
