"use client";

import { User } from "@/schemas";
import { useState } from "react";
import { AiOutlineUser } from "react-icons/ai";
import { twMerge } from "tailwind-merge";

type NavbarProfileProps = {
  user: User;
} & React.ComponentPropsWithoutRef<"div">;

export default function NavbarProfileMenu({
  children,
  className,
  user,
  ...rest
}: NavbarProfileProps) {
  const [opened, setOpened] = useState(false);

  return (
    <div
      className={twMerge(
        "relative inline-block",
        className,
      )}
      {...rest}
    >
      <button
        onClick={() => {
          setOpened(!opened);
        }}
        className="relative z-10 flex items-center rounded-md border border-transparent bg-white p-2 text-sm  focus:border-teal-500 focus:outline-none focus:ring focus:ring-teal-300 focus:ring-opacity-40"
      >
        <span className="mx-1">{user.name}</span>
        <svg
          className="mx-1 h-5 w-5"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M12 15.713L18.01 9.70299L16.597 8.28799L12 12.888L7.40399 8.28799L5.98999 9.70199L12 15.713Z"
            fill="currentColor"
          />
        </svg>
      </button>

      <div
        className={twMerge(
          "absolute right-0 z-20 mt-2 w-56 origin-top-right overflow-hidden rounded-md bg-white py-2 shadow-xl",
          opened ? "block" : "hidden",
        )}
        onBlur={() => {
          setOpened(false);
        }}
      >
        <a
          href="#"
          className="-mt-2 flex transform items-center p-3 text-sm transition-colors duration-300 hover:bg-gray-100"
        >
          <div className="mx-1 h-9 w-9 flex-shrink-0 rounded-full object-cover">
            <AiOutlineUser size={22} />
          </div>
          <div className="mx-1">
            <h1 className="text-sm font-semibold">
              {user.name}
            </h1>
            <p className="text-sm">
              {user.email}
            </p>
          </div>
        </a>

        <hr className="border-gray-200" />

        <a
          href="/home"
          className="block transform px-4 py-3 text-sm capitalize text-gray-600 transition-colors duration-300 hover:bg-gray-100"
        >
          Alterar perfil
        </a>

        <a
          href="#"
          className="block transform px-4 py-3 text-sm capitalize text-gray-600 transition-colors duration-300 hover:bg-gray-100"
        >
          Ver perfil
        </a>
        <a
          href="/login"
          className="block transform px-4 py-3 text-sm capitalize text-gray-600 transition-colors duration-300 hover:bg-gray-100"
        >
          Logout
        </a>
      </div>
    </div>
  );
}
