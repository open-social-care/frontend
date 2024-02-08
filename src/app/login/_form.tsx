"use client";

import {
  Box,
  Button,
  Card,
  Center,
  Flex,
  Image,
  PasswordInput,
  TextInput,
} from "@mantine/core";

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

  const handleLogin = async () => {
    const res = await login(form.values);

    console.log(res);
  };

  return (
    <Flex w="100%" h="100vmin" align="center" justify="center">
      <Box maw={300} mx="auto">
        <Center>
          <Image
            maw={63}
            src="/images/logo-black.png"
            alt="logo"
            w="63"
            mr="lg"
          />
        </Center>

        <Card mt="md" shadow="sm" padding="lg" radius="md" withBorder>
          <form onSubmit={form.onSubmit(() => handleLogin())}>
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
              <Button type="submit">{i18n.t("auth.login")}</Button>
            </Center>
          </form>
        </Card>
      </Box>
    </Flex>
  );
}
