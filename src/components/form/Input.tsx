import React from "react";
import { twMerge } from "tailwind-merge";

type InputProps = {
  label?: string;
  errors?: string[];
} & React.ComponentPropsWithoutRef<"input">;

export default function Input({
  label,
  name,
  errors,
  className,
  ...rest
}: InputProps) {
  return (
    <div
      className={twMerge(
        "mt-4 w-full",
        className,
      )}
    >
      {label && (
        <label
          className="text-gray-700"
          htmlFor={name}
        >
          {label}
        </label>
      )}

      <input
        name={name}
        className="mt-1 block w-full rounded-lg border border-gray-200 bg-white px-4 py-1.5 text-gray-700"
        {...rest}
      />

      {errors?.map((error, index) => (
        <p
          key={index}
          className="mt-1 text-sm text-orange-500"
        >
          {error}
        </p>
      ))}
    </div>
  );
}
