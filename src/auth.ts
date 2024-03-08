import { User } from "@/schemas";
import { cookies } from "next/headers";
import { permanentRedirect } from "next/navigation";

export const tokenFromCookie = () => {
  const user = userFromCookie();

  return user?.token;
};

const userFromCookie = () => {
  const cookieStore = cookies();

  const cookieData =
    cookieStore.get("auth-user")?.value;

  if (cookieData) {
    const user = User.parse(
      JSON.parse(cookieData),
    );

    return user;
  }
};

export default function auth() {
  const user = userFromCookie();

  if (user) {
    console.log(user);
    // ...
  } else {
    permanentRedirect("/login");
  }

  return { user };
}
