import { ActionFlashes } from "@/action-flash/ActionFlashes";
import { VBox } from "@/components/containers";
import { FormAddQuestion } from "@/components/pages/Questions/FormAddQuestion";
import { Heading, Skeleton } from "@/components/ui";
import { FormTemplate } from "@/schemas";
import { fetchFormTemplateAction } from "../_actions";
import QuestionList from "./_questions";

interface PageProps {
  params: {
    templateId: number;
  };
}

export default async function page({ params }: PageProps) {
  const { data } = await fetchFormTemplateAction(params.templateId);

  const formTemplate = FormTemplate.parse(data);

  return (
    <>
      <ActionFlashes />

      <Heading h1>{formTemplate.title}</Heading>

      <VBox className="mt-5">
        <Skeleton
          className="h-28"
          length={5}
        >
          <QuestionList templateId={params.templateId} />
        </Skeleton>
      </VBox>

      <FormAddQuestion />
    </>
  );
}
