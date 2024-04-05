import { Paper } from "@/components/containers";
import { Heading } from "@/components/ui";
import CreateUserForm from "./_form";

export default function page() {
  return (
    <>
      <Heading>Cadastrar usuário</Heading>

      <Paper className="mt-4">
        <CreateUserForm />
      </Paper>
    </>
  );
}
