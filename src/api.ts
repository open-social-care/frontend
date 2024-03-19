import { tokenFromCookie } from "./auth";

const api = async (
  input: RequestInfo | URL,
  init?: RequestInit,
) => {
  const config: RequestInit = {
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
      Authorization: `Bearer ${tokenFromCookie()}`,
    },
    ...init,
  };

  return await fetch(
    `${process.env.API_BASE_URL}api${input}`,
    config,
  );
};

export default api;
