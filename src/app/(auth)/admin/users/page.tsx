import { Paper, VBox } from "@/components/containers";
import { Heading } from "@/components/ui";
import Button from "@/components/ui/Button";
import { Suspense } from "react";
import Search from "@/components/ui/Search";
import Users from "./_users";

interface PageProps {
  searchParams: {
    page: number;
    query: string;
  };
}

export default function page({ searchParams }: PageProps) {
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
        <Search />

        <Suspense fallback={<>Carregando...</>}>
          <Users {...searchParams} />
        </Suspense>
      </Paper>
    </>
  );
}
