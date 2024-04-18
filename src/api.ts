import { redirect } from "next/navigation";
import { tokenFromCookie } from "./auth";

type ApiProps = { input: RequestInfo | URL; init?: RequestInit; redirectSuccessPath?: string };

const api = async ({ input, init, redirectSuccessPath }: ApiProps) => {
  const config: RequestInit = {
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
      Authorization: `Bearer ${tokenFromCookie()}`,
    },
    ...init,
  };

  const res = await fetch(`${process.env.API_BASE_URL}api${input}`, config);

  if (res.status === 401) {
    redirect("/login");
  }

  if (res.ok && redirectSuccessPath) {
    redirect(redirectSuccessPath);
  }

  return res;
};

export default api;
