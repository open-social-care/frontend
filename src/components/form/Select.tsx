"use client";

import { testIDs } from "@/e2e/_testIDs";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { twMerge } from "tailwind-merge";

export type SelectItem = {
  label: string;
  value: string;
};

type SelectProps = {
  data: SelectItem[];
  label?: string;
  placeholder?: string;
  errors?: string[];
  withAsterisk?: boolean;
  queryName?: string;
} & React.ComponentPropsWithoutRef<"select">;

export default function Select({
  data,
  label,
  placeholder,
  errors,
  withAsterisk,
  className,
  queryName,
  ...rest
}: SelectProps) {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();

  function handleUpdateQueryParam(value: string) {
    if (queryName) {
      const params = new URLSearchParams(searchParams);

      if (value) {
        params.set(queryName, value.toString());
      } else {
        params.delete(queryName);
      }

      replace(`${pathname}?${params.toString()}`, { scroll: false });
    }
  }

  return (
    <div className={twMerge("mt-4 w-full", className)}>
      {label && (
        <label
          className="text-gray-700"
          htmlFor={rest.name}
          data-testid="label"
        >
          {label}

          {withAsterisk && <span className="ml-1 text-sm text-red-400">*</span>}
        </label>
      )}

      <select
        name={rest.name}
        data-testid={testIDs.SELECT}
        className="mt-1 block w-full rounded-lg border border-gray-200 bg-white px-2 py-2 text-gray-700 focus:border-teal-500 focus:outline-none focus:ring focus:ring-teal-300 focus:ring-opacity-40"
        onChange={(e) => handleUpdateQueryParam(e.currentTarget.value)}
        {...rest}
        defaultValue={rest.defaultValue || (queryName && searchParams.get(queryName)?.toString())}
      >
        <option
          disabled
          selected={!rest.defaultValue}
        >
          {placeholder || "--"}
        </option>

        {data.map((item) => (
          <option
            key={item.value}
            value={item.value}
          >
            {item.label}
          </option>
        ))}
      </select>

      <div data-testid="errors">
        {errors?.map((error, index) => (
          <p
            key={index}
            className="mt-1 text-sm text-red-400"
          >
            {error}
          </p>
        ))}
      </div>
    </div>
  );
}
