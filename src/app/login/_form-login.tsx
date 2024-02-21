"use client";

import { Button, Center, PasswordInput, TextInput } from "@mantine/core";

import useAction from "@/hooks/useAction";
import i18n from "@/lang";
import { hasLength, isEmail, useForm } from "@mantine/form";
import { login } from "./actions";

export default function FormLogin() {
  const form = useForm({
    initialValues: {
      email: "",
      password: "",
    },

    validate: {
      email: isEmail(),
      password: hasLength({ min: 6 }),
    },
  });

  const { actionHandler, loading } = useAction({
    action: login,
    onComplete: (actionResponse) => {
      if (actionResponse.errors) {
        form.setErrors(actionResponse.errors);
      }
    },
  });

  return (
    <form
      onSubmit={form.onSubmit((values) => {
        actionHandler({ payload: values });
      })}
    >
      <TextInput
        withAsterisk
        label={i18n.t("auth.email")}
        placeholder="your@email.com"
        {...form.getInputProps("email")}
      />

      <PasswordInput
        withAsterisk
        label={i18n.t("auth.password")}
        placeholder="******"
        {...form.getInputProps("password")}
      />

      <Center mt="md">
        <Button type="submit" loading={loading}>
          {i18n.t("auth.login")}
        </Button>
      </Center>
    </form>
  );
}
