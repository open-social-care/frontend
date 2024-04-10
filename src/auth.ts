import { User } from "@/schemas";
import { cookies } from "next/headers";
import { permanentRedirect } from "next/navigation";

const authDataFromCookie = () => {
  const cookieStore = cookies();

  const cookieData = cookieStore.get("auth-user")?.value;

  if (cookieData) {
    const user = User.parse(JSON.parse(cookieData));

    return user;
  }
};

export const tokenFromCookie = () => {
  const user = authDataFromCookie();

  return user?.token;
};

const userFromCookie = () => {
  const user = authDataFromCookie();

  if (user) {
    // remove token info for non server components
    return { ...user, token: null };
  }
};

export default function auth() {
  const user = userFromCookie();

  if (user) {
    return { user };
  }

  permanentRedirect("/login");
}
