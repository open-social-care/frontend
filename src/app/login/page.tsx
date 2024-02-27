import api from "@/api";
import Image from "next/image";
import SubmitButton from "./_submit-button";

export const metadata = {
  title: "Login",
};

export default function page() {
  async function onSubmit(formData: FormData) {
    "use server";

    const response = await api("/login", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    console.log(data);
  }

  return (
    <div className="h-screen flex flex-col items-center justify-center bg-[url('/images/landing-page-background.svg')] bg-gray-100">
      <Image src="/images/logo-black.png" alt="logo" width="63" height="63" />

      <div className="max-w-md px-4 py-4 bg-white rounded-lg shadow-md mt-4 border">
        <form action={onSubmit}>
          <div className="grid grid-cols-1 gap-1 mt-2">
            <div>
              <label className="text-gray-700" htmlFor="email">
                Email
              </label>
              <input
                name="email"
                placeholder="your@email.com"
                className="block w-full px-4 py-1.5 mt-1 text-gray-700 bg-white border border-gray-200 rounded-lg"
              />
            </div>

            <div>
              <label className="text-gray-700" htmlFor="password">
                Password
              </label>
              <input
                name="password"
                type="password"
                placeholder="********"
                className="block w-full px-4 py-1.5 mt-1 text-gray-700 bg-white border border-gray-200 rounded-lg"
              />
            </div>
          </div>

          <div className="flex justify-center mt-4">
            <SubmitButton />
          </div>
        </form>
      </div>
    </div>
  );
}
