import { Paper, VBox } from "@/components/layouts/Containers";
import Heading from "@/components/layouts/Heading";

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
