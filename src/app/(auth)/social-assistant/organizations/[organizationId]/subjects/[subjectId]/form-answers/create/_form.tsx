"use client";

import { VBox } from "@/components/containers";
import Form from "@/components/form";
import Input from "@/components/form/Input";
import { Text } from "@/components/ui";
import { testIDs } from "@/e2e/_testIDs";
import { t } from "@/lang";
import { FormTemplateWithQuestions } from "@/schemas";
import { useParams } from "next/navigation";
import { useFormState } from "react-dom";
import { createFormAnswer } from "./_actions";

type FormProps = {
  template: FormTemplateWithQuestions;
};

export default function AnswersForm({ template }: FormProps) {
  const { organizationId, subjectId } = useParams<{ organizationId: string; subjectId: string }>();

  const [state, formAction] = useFormState(
    createFormAnswer.bind(null, organizationId, subjectId, template),
    undefined,
  );

  return (
    <Form
      className="mt-4 flex flex-col gap-8"
      action={formAction}
    >
      {state && (
        <Form.FlashMessage
          type={state.type}
          message={state.message}
        />
      )}

      {template.questions.map((question) => (
        <div
          key={`${question.type}-${question.id}`}
          className="border-b border-gray-200 pb-6 last:border-b-0 last:pb-0"
        >
          {question.type === "short_question" && (
            <Input
              name={`short_answers[${question.id}]`}
              label={question.description}
              placeholder={question.description}
              withAsterisk={question.answer_required}
              errors={state?.errors?.[`short_answers.${question.id}`]}
            />
          )}

          {question.type === "multiple_choice" && (
            <fieldset>
              <legend className="mb-2 font-medium text-gray-700">
                {question.description}
                {question.answer_required && <span className="ml-1 text-red-500">*</span>}
              </legend>
              <VBox className="gap-2">
                {question.options.map((option) => (
                  <label
                    key={option.id}
                    className="flex items-center gap-3 rounded-md p-2 hover:bg-gray-50"
                  >
                    <input
                      type="radio"
                      name={`multiple_choice_answers[${question.id}]`}
                      value={option.description}
                      className="h-4 w-4 border-gray-300 text-blue-600 focus:ring-blue-500"
                    />
                    <Text>{option.description}</Text>
                  </label>
                ))}
              </VBox>
              {state?.errors?.[`multiple_choice_answers.${question.id}`] && (
                <Text className="mt-1 text-sm text-red-600">
                  {state.errors[`multiple_choice_answers.${question.id}`][0]}
                </Text>
              )}
            </fieldset>
          )}
        </div>
      ))}

      <Form.Button
        className="self-end"
        data-testid={testIDs.SUBMIT_BUTTON}
      >
        {t("general_actions.create")}
      </Form.Button>
    </Form>
  );
}
