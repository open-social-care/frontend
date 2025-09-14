import { HBox, Paper } from "@/components/containers";
import { CardAction, Text } from "@/components/ui";
import { t } from "@/lang";
import { Question } from "@/schemas";
import { AiOutlineEdit } from "react-icons/ai";
import { FormAddQuestion } from "./_form-add-question";
import RemoveQuestionAction from "./_remove-question";

interface QuestionListProps {
  templateId: number;
  organizationId: number;
  questions: Question[];
}

export default function QuestionList({ templateId, organizationId, questions }: QuestionListProps) {
  return (
    <>
      {questions.map((question) => (
        <Paper
          className="mt-1"
          key={question.id}
        >
          <Text className="font-semibold">{question.description}</Text>

          {question.type === "multiple_choice" && (
            <ul className="mt-2 list-disc pl-6 text-sm text-gray-600">
              <p>Opções:</p>
              {question.options.map((option) => (
                <li key={option.id}>{option.description}</li>
              ))}
            </ul>
          )}

          <Text className="mt-2 text-sm">
            {question.answer_required && (
              <>
                {t("labels.answer_required")}
                <span className="ml-1 text-sm text-red-400">*</span>
              </>
            )}
          </Text>

          <HBox className="mt-4 justify-end gap-4">
            <CardAction
              icon={<AiOutlineEdit />}
              title={t("general_actions.edit")}
              href={`/manager/organizations/${organizationId}/form-templates/${templateId}/questions/${question.id}/edit?type=${question.type}`}
            />
            <RemoveQuestionAction
              templateId={templateId}
              questionId={question.id}
              questionType={question.type}
            />
          </HBox>
        </Paper>
      ))}

      <FormAddQuestion />
    </>
  );
}
