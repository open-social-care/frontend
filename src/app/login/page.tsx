import api from "@/api";
import Form from "@/components/form";
import Layout from "@/components/layout";
import Image from "next/image";

export const metadata = {
  title: "Login",
};

export default function page() {
  async function onSubmit(formData: FormData) {
    "use server";

    const response = await api("/login", {
      method: "POST",
      body: JSON.stringify({
        email: formData.get("email"),
        password: formData.get("password"),
      }),
    });

    const data = await response.json();

    console.log(data);
  }

  return (
    <Layout.Fullscreen className="items-center justify-center">
      <Image
        src="/images/logo-black.png"
        alt="logo"
        width="63"
        height="63"
      />

      <div className="mt-4 w-full rounded-lg border bg-white p-4 shadow-md sm:w-96">
        <Form action={onSubmit}>
          <Form.Input
            name="email"
            label="Email"
            placeholder="your@email.com"
          />

          <Form.Input
            name="password"
            label="Password"
            type="password"
            placeholder="********"
          />

          <Form.Button className="self-center">
            Login
          </Form.Button>
        </Form>
      </div>
    </Layout.Fullscreen>
  );
}
