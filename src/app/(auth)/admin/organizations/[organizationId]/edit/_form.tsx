"use client";

import Form from "@/components/form";
import { testIDs } from "@/e2e/_testIDs";
import { t } from "@/lang";
import { useFormState } from "react-dom";

import i18nEntriesToSelect from "@/helpers/i18nEntriesToSelect";
import { updateOrganizationAction } from "./_actions";
import { Organization } from "@/schemas";

interface UpdateOrganizationFormProps {
  organization: Organization;
}

export function UpdateOrganizationForm({ organization }: UpdateOrganizationFormProps) {
  const [state, formAction] = useFormState(
    updateOrganizationAction.bind(null, organization.id),
    undefined,
  );

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
        defaultValue={organization.name}
      />

      <Form.Input
        name="phone"
        label={t("labels.phone")}
        placeholder="(00) 00000-0000"
        withAsterisk
        mask={[{ mask: "(00) 0000-0000" }, { mask: "(00) 00000-0000" }]}
        errors={state?.errors?.["phone"]}
        defaultValue={organization.phone}
      />

      <Form.Select
        name="document_type"
        label={t("labels.document_type")}
        data={i18nEntriesToSelect("document_types")}
        withAsterisk
        errors={state?.errors?.["document_type"]}
        defaultValue={organization.document_type}
      />

      <Form.Input
        name="document"
        label={t("labels.document")}
        placeholder={t("labels.document")}
        withAsterisk
        mask={[{ mask: "000.000.000-00" }, { mask: "00.000.000/0000-00" }]}
        errors={state?.errors?.["document"]}
        defaultValue={organization.document}
      />

      <Form.Button
        className="self-end"
        data-testid={testIDs.SUBMIT_BUTTON}
      >
        {t(`general_actions.update`)}
      </Form.Button>
    </Form>
  );
}
