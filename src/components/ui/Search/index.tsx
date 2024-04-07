"use client";

import { useSearchParams, usePathname, useRouter } from "next/navigation";
import { twMerge } from "tailwind-merge";

export default function Search({ className }: React.ComponentPropsWithoutRef<"input">) {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();

  function handleSearch(term: string) {
    const params = new URLSearchParams(searchParams);
    if (term) {
      params.set("query", term);
      params.delete("page");
    } else {
      params.delete("query");
    }
    replace(`${pathname}?${params.toString()}`);
  }

  return (
    <input
      className={twMerge(
        "peer block w-full rounded-lg border border-gray-200 py-[9px] pl-5 text-sm outline-2 placeholder:text-gray-500",
        className,
      )}
      placeholder="Pesquisar"
      onChange={(e) => {
        handleSearch(e.target.value);
      }}
      defaultValue={searchParams.get("query")?.toString()}
    />
  );
}
