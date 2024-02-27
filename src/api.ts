const api = async (input: RequestInfo | URL, init?: RequestInit) => {
    const config: RequestInit = {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        // Authorization: `Bearer ${token}`,
      },
      ...init,
    };
  
    return await fetch(
      `${process.env.NEXT_PUBLIC_API_BASE_URL}api${input}`,
      config
    );
  };
  
  export default api;