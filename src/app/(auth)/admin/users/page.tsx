import { Paper, VBox } from "@/components/containers";
import { Heading } from "@/components/ui";
import Button from "@/components/ui/Button";
import Pagination from "@/components/ui/Pagination";
import { User } from "@/schemas";
import { fetchUsersAction } from "./_actions";
import UsersContainer from "./users-container";

interface PageProps {
  searchParams: {
    page: number;
  };
}

export default async function page({ searchParams }: PageProps) {
  const { data, pagination } = await fetchUsersAction({ page: searchParams.page });

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
        <UsersContainer users={users} />

        <Pagination
          url="/admin/users"
          paginationInfo={pagination}
        />
      </Paper>
    </>
  );
}
