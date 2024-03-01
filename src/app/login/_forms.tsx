"use client";

import React from "react";
import Form from "@/components/form";
import { loginAction } from "./_actions";
import { useFormState } from "react-dom";

export default function LoginForm() {
  const [state, formAction] = useFormState(
    loginAction,
    undefined,
  );

  console.log("render");

  return (
    <>
      <Form action={formAction}>
        <Form.FlashMessage
          type={state?.type}
          message={state?.message}
        />

        <Form.Input
          name="email"
          label="Email"
          placeholder="your@email.com"
          errors={state?.formErrors?.["email"]}
        />

        <Form.Input
          name="password"
          label="Password"
          type="password"
          placeholder="********"
          errors={state?.formErrors?.["password"]}
        />

        <Form.Button className="self-center">
          Login
        </Form.Button>
      </Form>

      <div className="mt-4 overflow-scroll rounded-xl bg-teal-600 p-4 text-sm text-white">
        <p>DEBUG Response:</p>
        <pre>
          {JSON.stringify(state, null, 2)}
        </pre>
      </div>
    </>
  );
}
