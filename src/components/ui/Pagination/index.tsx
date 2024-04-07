"use client";

import { PaginationInfo } from "@/schemas";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { LuChevronLeft, LuChevronRight } from "react-icons/lu";
import { twMerge } from "tailwind-merge";

type PaginationProps = {
  paginationInfo?: PaginationInfo;
} & React.ComponentPropsWithoutRef<"div">;

const pageLinkDefaultClasses =
  "mx-1 flex transform items-center justify-center rounded-lg border bg-white px-4 py-2 text-gray-600 transition-colors duration-300 hover:bg-gray-100 hover:text-gray-700 rtl:-scale-x-100";

const pageLinkDisabledClasses = "pointer-events-none border-none text-gray-400";

export default function Pagination({
  paginationInfo,
  children,
  className,
  ...rest
}: PaginationProps) {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();

  if (!paginationInfo) {
    return <></>;
  }

  function handlePaginate(page: number) {
    const params = new URLSearchParams(searchParams);

    if (page) {
      params.set("page", page.toString());
    } else {
      params.delete("page");
    }

    replace(`${pathname}?${params.toString()}`);
  }

  const prevPage = paginationInfo.current_page - 1;
  const nextPage = paginationInfo.current_page + 1;

  const prevPageDisabled = paginationInfo.current_page == 1;
  const nextPageDisabled = paginationInfo.last_page == paginationInfo.current_page;

  const pages = Array.from({ length: paginationInfo.last_page }).map((_, index) => {
    const pageIndex = index + 1;

    const active = paginationInfo.current_page == pageIndex;

    return (
      <a
        key={index}
        className={twMerge(
          "mx-1 hidden transform rounded-lg border bg-white px-4 py-2 text-gray-600 transition-colors duration-300 hover:bg-gray-100 hover:text-gray-700 sm:inline",
          active && "pointer-events-none border-none bg-teal-100 text-teal-600",
        )}
        onClick={() => {
          handlePaginate(pageIndex);
        }}
      >
        {pageIndex}
      </a>
    );
  });

  return (
    <div
      className={twMerge("mt-10 flex justify-end", className)}
      {...rest}
    >
      <a
        className={twMerge(pageLinkDefaultClasses, prevPageDisabled && pageLinkDisabledClasses)}
        onClick={() => {
          handlePaginate(prevPage);
        }}
      >
        <LuChevronLeft />
      </a>

      {pages}

      <a
        className={twMerge(pageLinkDefaultClasses, nextPageDisabled && pageLinkDisabledClasses)}
        onClick={() => {
          handlePaginate(nextPage);
        }}
      >
        <LuChevronRight />
      </a>
    </div>
  );
}
