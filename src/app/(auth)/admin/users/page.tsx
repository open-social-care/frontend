import { HBox, VBox } from "@/components/containers";
import { Heading } from "@/components/ui";
import Button from "@/components/ui/Button";
import Search from "@/components/ui/Search";
import { Suspense } from "react";
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

        <Button href="/admin/users/create">Cadastrar</Button>
      </VBox>

      <HBox className="mt-5">
        <Search />

        <Suspense fallback={<>Carregando...</>}>
          <Users {...searchParams} />
        </Suspense>
      </HBox>
    </>
  );
}
