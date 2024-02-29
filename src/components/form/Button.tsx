"use client";

import { useFormStatus } from "react-dom";
import { twMerge } from "tailwind-merge";

export default function Button({
  children,
  className,
  ...rest
}: React.ComponentPropsWithoutRef<"button">) {
  const { pending } = useFormStatus();

  return (
    <button
      {...rest}
      disabled={pending}
      className={twMerge(
        "mt-4 transform rounded-lg bg-teal-500 px-6 py-2 leading-5 text-white transition-colors duration-300 hover:bg-teal-600 focus:bg-teal-600 focus:outline-none disabled:bg-gray-200",
        className,
      )}
    >
      {children}
    </button>
  );
}
