"use client";

import Form from "@/components/form";
import { testIDs } from "@/e2e/_testIDs";
import { t } from "@/lang";
import { useFormState } from "react-dom";

import { createOrganizationAction } from "./_actions";
import i18nEntriesToSelect from "@/helpers/i18nEntriesToSelect";

export function CreateOrganizationForm() {
  const [state, formAction] = useFormState(createOrganizationAction, undefined);

  return (
    <Form action={formAction}>
      {state && (
        <Form.FlashMessage
          type={state.type}
          message={state.message}
        />
      )}

      <Form.Input
        name="name"
        label={t("labels.name")}
        placeholder={t("labels.name")}
        withAsterisk
        errors={state?.errors?.["name"]}
      />

      <Form.Input
        name="phone"
        label={t("labels.phone")}
        placeholder="(00) 00000-0000"
        withAsterisk
        errors={state?.errors?.["phone"]}
      />

      <Form.Select
        name="document_type"
        label={t("labels.document_type")}
        data={i18nEntriesToSelect("document_types")}
        withAsterisk
        errors={state?.errors?.["document_type"]}
      />

      <Form.Input
        name="document"
        label={t("labels.document")}
        placeholder={t("labels.document")}
        withAsterisk
        errors={state?.errors?.["document"]}
      />

      <Form.Button
        className="self-end"
        data-testid={testIDs.SUBMIT_BUTTON}
      >
        {t(`general_actions.create`)}
      </Form.Button>
    </Form>
  );
}
