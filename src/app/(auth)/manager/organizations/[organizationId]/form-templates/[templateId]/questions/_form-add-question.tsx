"use client";

import Form from "@/components/form";
import { testIDs } from "@/e2e/_testIDs";
import { t } from "@/lang";
import { useFormState } from "react-dom";

import { Paper } from "@/components/containers";
import { Heading } from "@/components/ui";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import { createQuestionAction } from "./_actions";

export function FormAddQuestion() {
  const params = useParams<{ templateId: string }>();
  const [state, formAction] = useFormState(
    createQuestionAction.bind(null, params.templateId),
    undefined,
  );

  const [type, setType] = useState<"short_question" | "multiple_choice">("short_question");
  const [options, setOptions] = useState<string[]>([""]);

  function handleOptionChange(index: number, value: string) {
    const updated = [...options];
    updated[index] = value;
    setOptions(updated);
  }

  function addOptionField() {
    setOptions([...options, ""]);
  }

  useEffect(() => {
    if (type === "short_question") {
      setOptions([""]);
    }
  }, [type]);

  return (
    <Paper className="mt-8 p-6">
      <Heading
        h2
        className="mb-6"
      >
        {t("labels.add_question")}
      </Heading>{" "}
      <Form action={formAction}>
        <div className="mb-4 flex flex-col gap-6 md:flex-row">
          {" "}
          <div className="flex-1">
            <Form.Input
              name="description"
              label={t("labels.description")}
              placeholder={t("labels.description")}
              withAsterisk
              errors={state?.errors?.["description"]}
              className="mb-4"
            />
          </div>
          <div className="w-full md:w-56">
            {" "}
            <Form.Select
              name="data_type"
              label={t("labels.question_type")}
              value={type}
              onChange={(e) => setType(e.target.value as "short_question" | "multiple_choice")}
              data={[
                { value: "short_question", label: t("labels.short_answer") },
                { value: "multiple_choice", label: t("labels.multiple_choice") },
              ]}
              className="mb-4"
            />
          </div>
        </div>

        <Form.Switch
          name="answer_required"
          label={t("labels.answer_required")}
          className="mb-6"
        />

        {type === "multiple_choice" && (
          <div className="mb-6 rounded-md border p-4">
            {" "}
            <Heading
              h3
              className="mb-4"
            >
              {t("labels.options")}
            </Heading>{" "}
            {options.map((opt, idx) => (
              <Form.Input
                key={idx}
                name={`options[${idx}]`}
                label={`${t("labels.option")} ${idx + 1}`}
                value={opt}
                onChange={(e) => handleOptionChange(idx, (e.target as HTMLInputElement).value)}
                className="mb-3"
              />
            ))}
            <Form.Button
              type="button"
              onClick={addOptionField}
              className="mt-2"
            >
              {t("general_actions.add_option")}
            </Form.Button>
          </div>
        )}

        <Form.Button
          className="mt-4 self-end"
          data-testid={testIDs.SUBMIT_BUTTON}
        >
          {t("general_actions.create")}
        </Form.Button>
      </Form>
    </Paper>
  );
}
