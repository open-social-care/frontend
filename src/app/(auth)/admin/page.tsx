import { Paper, VBox } from "@/components/containers";
import { Heading } from "@/components/ui";

export default function page() {
  return (
    <>
      <Heading>Admin H1</Heading>

      <Paper className="mt-4">
        <Heading order={2}>Titulo H2</Heading>
        <Heading order={3}>Titulo H3</Heading>
        Conteudo
      </Paper>
    </>
  );
}
