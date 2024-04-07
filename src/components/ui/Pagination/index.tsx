"use client";

import { PaginationInfo } from "@/schemas";
import Link from "next/link";
import { LuChevronLeft, LuChevronRight } from "react-icons/lu";
import { twMerge } from "tailwind-merge";

type PaginationProps = {
  url: string;
  paginationInfo?: PaginationInfo;
} & React.ComponentPropsWithoutRef<"div">;

export default function Pagination({
  url,
  paginationInfo,
  children,
  className,
  ...rest
}: PaginationProps) {
  if (!paginationInfo) {
    return <></>;
  }

  const prevPage = paginationInfo.current_page - 1;
  const nextPage = paginationInfo.current_page + 1;

  const prevPageDisabled = paginationInfo.current_page == 1;
  const nextPageDisabled = paginationInfo.last_page == paginationInfo.current_page;

  const pages = Array.from({ length: paginationInfo.last_page }).map((_, index) => {
    const pageIndex = index + 1;

    const active = paginationInfo.current_page == pageIndex;

    return (
      <Link
        key={index}
        href={`${url}?page=${pageIndex}`}
        className={twMerge(
          "mx-1 hidden transform rounded-lg border bg-white px-4 py-2 text-gray-600 transition-colors duration-300 hover:bg-gray-100 hover:text-gray-700 sm:inline",
          active && "pointer-events-none border-none bg-teal-100 text-teal-600",
        )}
      >
        {index + 1}
      </Link>
    );
  });

  return (
    <div
      className={twMerge("mt-10 flex justify-end", className)}
      {...rest}
    >
      <Link
        href={prevPageDisabled ? "#" : `${url}?page=${prevPage}`}
        className={twMerge(
          "mx-1 flex transform items-center justify-center rounded-lg border bg-white px-4 py-2 text-gray-600 transition-colors duration-300 hover:bg-gray-100 hover:text-gray-700 rtl:-scale-x-100",
          prevPageDisabled && "pointer-events-none border-none text-gray-400",
        )}
        scroll={!prevPageDisabled}
      >
        <LuChevronLeft />
      </Link>

      {pages}

      <Link
        href={nextPageDisabled ? "#" : `${url}?page=${nextPage}`}
        className={twMerge(
          "mx-1 flex transform items-center justify-center rounded-lg border bg-white px-4 py-2 text-gray-600 transition-colors duration-300 hover:bg-gray-100 hover:text-gray-700 rtl:-scale-x-100",
          nextPageDisabled && "pointer-events-none border-none text-gray-400",
        )}
        scroll={!nextPageDisabled}
      >
        <LuChevronRight />
      </Link>
    </div>
  );
}
