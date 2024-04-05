import { HBox, Paper, VBox } from "@/components/containers";
import { Heading, Text } from "@/components/ui";
import Button from "@/components/ui/Button";
import { User } from "@/schemas";
import { AiOutlineUser } from "react-icons/ai";
import { fetchUsersAction } from "./_actions";

export default async function page() {
  const { data } = await fetchUsersAction();

  const users = User.array().parse(data);

  return (
    <>
      <VBox className="justify-between">
        <Heading>Usuários</Heading>

        <Button
          className="self-end"
          href="/admin/users/create"
        >
          Cadastrar
        </Button>
      </VBox>

      <Paper className="mt-4">
        {users.map((user) => (
          <HBox
            key={user.id}
            className="mt-4"
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
              <a>Ver</a>
              <a>Editar</a>
            </VBox>

            <hr />
          </HBox>
        ))}
      </Paper>
    </>
  );
}
