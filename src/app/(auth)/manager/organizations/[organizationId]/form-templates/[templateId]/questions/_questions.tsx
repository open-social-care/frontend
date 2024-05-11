import { HBox, Paper } from "@/components/containers";

import { t } from "@/lang";

import { CardAction, Text } from "@/components/ui";
import { Question } from "@/schemas";
import { AiOutlineDelete } from "react-icons/ai";
import { fetchQuestionsAction } from "./_actions";

interface QuestionListProps {
  templateId: number;
}

export default async function QuestionList({ templateId }: QuestionListProps) {
  const { data } = await fetchQuestionsAction(templateId);
  const questions = Question.array().parse(data);

  if (questions.length == 0) {
    return <Text>{t("informations.questions_not_found")}</Text>;
  }

  return (
    <>
      {questions.map((question) => (
        <Paper
          className="mt-1"
          key={question.id}
        >
          <Text className="font-semibold">{question.description}</Text>

          <Text className="text-sm">
            {question.answer_required && (
              <>
                {t("labels.answer_required")}
                <span className="ml-1 text-sm text-red-400">*</span>
              </>
            )}
          </Text>

          <HBox className="mt-4 justify-end gap-4">
            <CardAction
              title={t("general_actions.remove")}
              href=""
              icon={<AiOutlineDelete />}
            />
          </HBox>
        </Paper>
      ))}
    </>
  );
}
