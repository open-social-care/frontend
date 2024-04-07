import { HBox, VBox } from "@/components/containers";
import Input from "@/components/form/Input";
import { Text } from "@/components/ui";
import Button from "@/components/ui/Button";
import { AiOutlineUser } from "react-icons/ai";

import { User } from "@/schemas";

interface UsersContainerProps {
  users: User[];
}

export default function UsersContainer({ users }: UsersContainerProps) {
  return (
    <>
      <Input placeholder="Pesquisar"></Input>

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
    </>
  );
}
