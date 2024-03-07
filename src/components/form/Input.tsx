import React from "react";
import { twMerge } from "tailwind-merge";

type InputProps = {
  label?: string;
  errors?: string[];
  withAsterisk?: boolean;
} & React.ComponentPropsWithoutRef<"input">;

export default function Input({
  label,
  name,
  errors,
  withAsterisk,
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
          data-testid="label"
        >
          {label}

          {withAsterisk && (
            <span className="ml-1 text-sm text-red-400">
              *
            </span>
          )}
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
          className="mt-1 text-sm text-red-400"
          data-testid="error"
        >
          {error}
        </p>
      ))}
    </div>
  );
}
