import Layout from "@/components/layout";
import i18n from "@/lang";
import Image from "next/image";
import LoginForm from "./_form";

export const metadata = {
  title: i18n.t("auth.login"),
};

export default function page() {
  return (
    <Layout.Fullscreen className="items-center justify-center">
      <Image
        src="/images/logo-black.png"
        alt="logo"
        width="63"
        height="63"
      />

      <div className="mt-4 w-full rounded-lg border bg-white p-4 shadow-md sm:w-96">
        <LoginForm />
      </div>
    </Layout.Fullscreen>
  );
}
