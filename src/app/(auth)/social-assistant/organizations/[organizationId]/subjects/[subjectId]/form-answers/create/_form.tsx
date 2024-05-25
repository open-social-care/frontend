"use client";

import Form from "@/components/form";
import Input from "@/components/form/Input";
import { testIDs } from "@/e2e/_testIDs";
import { t } from "@/lang";
import { FormTemplateWithQuestions } from "@/schemas";

type FormProps = {
  template: FormTemplateWithQuestions;
};

export default function AnswersForm({ template }: FormProps) {
  return (
    <>
      <Form>
        {template.short_questions.map((question) => (
          <Input
            key={question.id}
            label={question.description}
            placeholder={question.description}
            withAsterisk={question.answer_required}
          />
        ))}

        <Form.Button
          className="self-end"
          data-testid={testIDs.SUBMIT_BUTTON}
        >
          {t("general_actions.create")}
        </Form.Button>
      </Form>
    </>
  );
}
