"use client";

import { HBox, VBox } from "@/components/containers";
import Form from "@/components/form";
import { Button, CardAction } from "@/components/ui";
import { testIDs } from "@/e2e/_testIDs";
import { t } from "@/lang";
import { Question } from "@/schemas";
import { useState } from "react";
import { useFormState } from "react-dom";
import { updateQuestionAction } from "./_actions";

interface FormUpdateQuestionProps {
  question: Question;
  organizationId: number;
  templateId: number;
  questionId: number;
}

export function FormUpdateQuestion({
  question,
  organizationId,
  templateId,
  questionId,
}: FormUpdateQuestionProps) {
  const [options, setOptions] = useState(
    question.type === "multiple_choice" ? question.options.map((o) => o.description) : [],
  );

  const [state, formAction] = useFormState(
    updateQuestionAction.bind(null, organizationId, templateId, questionId, question.type),
    undefined,
  );

  const handleAddOption = () => setOptions([...options, ""]);

  const handleRemoveOption = (indexToRemove: number) => {
    setOptions(options.filter((_, index) => index !== indexToRemove));
  };

  const handleOptionChange = (indexToChange: number, value: string) => {
    const newOptions = [...options];
    newOptions[indexToChange] = value;
    setOptions(newOptions);
  };

  return (
    <Form action={formAction}>
      {state && (
        <Form.FlashMessage
          type={state.type}
          message={state.message}
        />
      )}

      <VBox className="gap-8">
        {/* Campos principais */}
        <Form.Input
          name="description"
          label={t("labels.description")}
          placeholder={t("labels.description")}
          withAsterisk
          errors={state?.errors?.["description"]}
          defaultValue={question.description}
        />

        <Form.Switch
          name="answer_required"
          label={t("labels.answer_required")}
          defaultChecked={question.answer_required}
        />

        {question.type === "multiple_choice" && (
          <div className="border-t border-gray-200 pt-8">
            <h3 className="mb-6 text-lg font-medium">{t("labels.options")}</h3>

            <VBox className="gap-5">
              {options.map((option, index) => (
                <HBox
                  key={index}
                  className="items-start gap-3"
                >
                  <Form.Input
                    name={`options[${index}]`}
                    placeholder={`${t("labels.option")} ${index + 1}`}
                    value={option}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                      handleOptionChange(index, e.target.value)
                    }
                    className="flex-grow"
                  />
                  <Button
                    type="button"
                    className="mt-5 self-center text-sm font-medium hover:underline"
                    onClick={() => handleRemoveOption(index)}
                    aria-label="Remover opção"
                  >
                    {t("general_actions.remove")}
                  </Button>
                </HBox>
              ))}
            </VBox>

            <div className="mt-6">
              <Button
                type="button"
                className="rounded-md border border-gray-300 bg-transparent px-4 py-2 text-sm font-medium text-gray-800 hover:bg-gray-50"
                onClick={handleAddOption}
              >
                {t("general_actions.add_option")}
              </Button>
            </div>
          </div>
        )}

        <HBox className="justify-end gap-6 border-t border-gray-200 pt-8">
          <CardAction
            title={t("general_actions.cancel")}
            href={`/manager/organizations/${organizationId}/form-templates/${templateId}`}
          />
          <Form.Button data-testid={testIDs.SUBMIT_BUTTON}>
            {t("general_actions.update")}
          </Form.Button>
        </HBox>
      </VBox>
    </Form>
  );
}
