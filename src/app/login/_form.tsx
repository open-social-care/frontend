"use client";

import Form from "@/components/form";
import i18n from "@/lang";
import { useFormState } from "react-dom";
import { loginAction } from "./_actions";
import { testIDs } from "@/e2e/_testIDs";

export default function LoginForm() {
  const [state, formAction] = useFormState(
    loginAction,
    undefined,
  );

  return (
    <>
      <Form action={formAction}>
        <Form.FlashMessage
          type={state?.type}
          message={state?.message}
        />

        <Form.Input
          name="email"
          label={i18n.t("auth.email")}
          placeholder="your@email.com"
          withAsterisk
          errors={state?.errors?.["email"]}
        />

        <Form.Input
          name="password"
          label={i18n.t("auth.password")}
          type="password"
          placeholder="********"
          withAsterisk
          errors={state?.errors?.["password"]}
        />

        <Form.Button className="self-center" data-testid={testIDs.SUBMIT_BUTTON}>
          {i18n.t("auth.login")}
        </Form.Button>
      </Form>
    </>
  );
}
