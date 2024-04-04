import { t } from "@/lang";
import Image from "next/image";

import { Paper } from "@/components/containers";

import LoginForm from "./_form";

export const metadata = {
  title: t("auth.login"),
};

export default function page() {
  return (
    <>
      <Image
        src="/images/logo.png"
        alt="logo"
        width="260"
        height="75" // keep aspect ratio from original file
        priority
      />

      <Paper className="mt-4 w-[90%] max-w-96">
        <LoginForm />
      </Paper>
    </>
  );
}
