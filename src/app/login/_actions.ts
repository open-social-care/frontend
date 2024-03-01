import api from "@/api";
import { ApiResponseSchema } from "@/schemas/ApiFormResponse";

//TEMP delay for testing!
const delay = (ms: number) => {
  return new Promise((resolve) =>
    setTimeout(resolve, ms),
  );
};

export async function loginAction(
  prevState: any,
  formData: FormData,
): Promise<ApiResponseSchema> {
  // const response = await api("/login", {
  //   method: "POST",
  //   body: JSON.stringify({
  //     email: formData.get("email"),
  //     password: formData.get("password"),
  //   }),
  // });

  // const data = await response.json();

  // console.log(data);

  // TODO: parse response using Zod schema instead of returning mock.

  //------ mock return & fake delay
  const simulatedError: ApiResponseSchema = {
    type: "error",
    message: "Credenciais de login inválidas.",
    formErrors: {
      email: ["Email inválido"],
      password: [
        "Senha inválida, esta senha pertence a outro usuário (samuel@socialcare.com)",
      ],
    },
  };

  const simulatedSuccess: ApiResponseSchema = {
    type: "success",
    message:
      "Login efetuado com successo..redirect em ssr",
    data: {
      token: "ASKJHDASKJHD198239812873",
    },
  };

  await delay(1000);

  return Math.random() > 0.5
    ? simulatedError
    : simulatedSuccess;
}
