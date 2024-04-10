import { redirect } from "next/navigation";
import { tokenFromCookie } from "./auth";

const api = async (input: RequestInfo | URL, init?: RequestInit) => {
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

  return res;
};

export default api;
