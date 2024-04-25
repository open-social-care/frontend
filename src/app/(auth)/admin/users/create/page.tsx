import { Paper } from "@/components/containers";
import { Heading } from "@/components/ui";
import { CreateUserForm } from "./_form";
import { t } from "@/lang";

export default function page() {
  return (
    <>
      <Heading h1>{t("page_titles.create_user")}</Heading>

      <Paper className="mt-4">
        <CreateUserForm />
      </Paper>
    </>
  );
}
