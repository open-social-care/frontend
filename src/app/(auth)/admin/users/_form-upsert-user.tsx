"use client";

import Form from "@/components/form";
import { testIDs } from "@/e2e/_testIDs";
import { t } from "@/lang";
import { User } from "@/schemas";
import { useFormState } from "react-dom";
import { updateUserAction } from "./[userId]/edit/_actions";
import { createUserAction } from "./create/_actions";

interface UpsertUserFormProps {
  user?: User;
}

interface UpdateUserFormProps {
  user: User;
}

export function CreateUserForm() {
  return UpsertUserForm({});
}

export function UpdateUserForm(props: UpdateUserFormProps) {
  return UpsertUserForm(props);
}

function UpsertUserForm({ user }: UpsertUserFormProps) {
  const [state, formAction] = useFormState(
    user ? updateUserAction.bind(null, user.id) : createUserAction,
    undefined,
  );

  return (
    <>
      <Form action={formAction}>
        {state && (
          <Form.FlashMessage
            type={state.type}
            message={state.message}
          />
        )}

        <Form.Input
          name="name"
          label="Nome"
          placeholder="Nome"
          withAsterisk
          errors={state?.errors?.["name"]}
          defaultValue={user?.name}
        />

        <Form.Input
          name="email"
          label={t("auth.email")}
          placeholder="user@email.com"
          withAsterisk
          errors={state?.errors?.["email"]}
          defaultValue={user?.email}
        />

        <Form.Input
          name="password"
          label={t("auth.password")}
          type="password"
          placeholder="********"
          withAsterisk
          errors={state?.errors?.["password"]}
        />

        <Form.Input
          name="password_confirmation"
          label={t("auth.password_confirmation")}
          type="password"
          placeholder="********"
          withAsterisk
          errors={state?.errors?.["password_confirmation"]}
        />

        <Form.Button
          className="self-end"
          data-testid={testIDs.SUBMIT_BUTTON}
        >
          {t(`general_actions.${user ? "edit" : "create"}`)}
        </Form.Button>
      </Form>
    </>
  );
}
