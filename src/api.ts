const api = async (input: RequestInfo | URL, init?: RequestInit) => {
  const config: RequestInit = {
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
      // Authorization: `Bearer ${token}`,
    },
    ...init,
  };

  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_BASE_URL}api${input}`,
    config
  );

  return await res.json();
};

export default api;
