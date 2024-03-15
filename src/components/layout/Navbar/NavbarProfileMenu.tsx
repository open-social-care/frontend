"use client";

import { useState } from "react";
import { twMerge } from "tailwind-merge";

export default function NavbarProfileMenu({
  children,
  className,
  ...rest
}: React.ComponentPropsWithoutRef<"div">) {
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
        <span className="mx-1">Usuário</span>
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
          <img
            className="mx-1 h-9 w-9 flex-shrink-0 rounded-full object-cover"
            src="https://images.unsplash.com/photo-1523779917675-b6ed3a42a561?ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8d29tYW4lMjBibHVlfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=face&w=500&q=200"
            alt="jane avatar"
          />
          <div className="mx-1">
            <h1 className="text-sm font-semibold">
              Usuário
            </h1>
            <p className="text-sm">
              janedoe@exampl.com
            </p>
          </div>
        </a>

        <hr className="border-gray-200" />

        <a
          href="#"
          className="block transform px-4 py-3 text-sm capitalize text-gray-600 transition-colors duration-300 hover:bg-gray-100"
        >
          view profile
        </a>
        <a
          href="#"
          className="block transform px-4 py-3 text-sm capitalize text-gray-600 transition-colors duration-300 hover:bg-gray-100"
        >
          Logout
        </a>
      </div>
    </div>
  );
}
