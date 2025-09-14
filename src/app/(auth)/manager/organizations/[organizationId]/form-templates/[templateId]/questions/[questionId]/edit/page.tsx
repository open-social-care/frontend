import { Paper } from "@/components/containers";
import { Heading } from "@/components/ui";
import { Question } from "@/schemas";
import { fetchQuestionAction } from "./_actions";
import { FormUpdateQuestion } from "./_form";

interface PageProps {
  params: {
    organizationId: number;
    templateId: number;
    questionId: number;
  };
  searchParams: {
    type?: "short_question" | "multiple_choice";
  };
}

export default async function page({ params, searchParams }: PageProps) {
  const questionType = searchParams.type;

  if (!questionType) {
    return <p>Erro: Tipo da pergunta não especificado.</p>;
  }

  const { data } = await fetchQuestionAction(params.templateId, params.questionId, questionType);

  const question = Question.parse(data);

  return (
    <>
      <Heading h1>Editar questão</Heading>

      <Paper className="mt-4">
        <FormUpdateQuestion
          question={question}
          {...params}
        />
      </Paper>
    </>
  );
}
