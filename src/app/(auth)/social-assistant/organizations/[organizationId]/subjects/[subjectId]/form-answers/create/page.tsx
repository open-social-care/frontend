import { Paper } from "@/components/containers";
import { Heading } from "@/components/ui";
import { FormTemplate, FormTemplateWithQuestions } from "@/schemas";
import { fetchFormTemplate, fetchTemplates } from "./_actions";
import AnswersForm from "./_form";
import SelecTemplate from "./_select-template";

interface PageProps {
  params: {
    organizationId: number;
  };
  searchParams: {
    template: number;
  };
}

export default async function page({ params, searchParams }: PageProps) {
  const { data } = await fetchTemplates(params.organizationId);
  const templates = FormTemplate.array().parse(data);

  const { data: formTemplateData } = await fetchFormTemplate(searchParams.template);
  const formTemplate = FormTemplateWithQuestions.safeParse(formTemplateData);

  return (
    <>
      <Heading h1>Cadastrar atendimento</Heading>

      <Paper className="mt-4">
        <SelecTemplate templates={templates} />

        {formTemplate.success && <AnswersForm template={formTemplate.data} />}
      </Paper>
    </>
  );
}
