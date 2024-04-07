import { HBox, VBox } from "@/components/containers";
import { Text } from "@/components/ui";
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
        <HBox
          key={user.id}
          className="mt-10"
        >
          <div>
            <Text className="font-semibold">
              <AiOutlineUser className="mr-2 inline-flex align-text-top" />
              {user.name}
            </Text>

            <Text>{user.email}</Text>

            <Text>Perfis: {user.roles}</Text>
          </div>

          <VBox>
            <Button>Ver</Button>
            <Button>Editar</Button>
          </VBox>

          <hr />
        </HBox>
      ))}

      <Pagination paginationInfo={pagination} />
    </>
  );
}
