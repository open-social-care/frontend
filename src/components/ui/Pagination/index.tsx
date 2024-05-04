"use client";

import { HBox } from "@/components/containers";
import { Paginate } from "@/schemas";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { LuChevronLeft, LuChevronRight, LuChevronsLeft, LuChevronsRight } from "react-icons/lu";
import { twMerge } from "tailwind-merge";
import Text from "../Text";
import PaginationButton from "./PaginationButton";

type PaginationProps = {
  paginate?: Paginate;
  queryName?: string;
} & React.ComponentPropsWithoutRef<"div">;

export default function Pagination({
  paginate,
  queryName,
  children,
  className,
  ...rest
}: PaginationProps) {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();

  if (!paginate) return;

  function handlePaginate(page: number) {
    const params = new URLSearchParams(searchParams);

    const qName = queryName || "page";

    if (page) {
      params.set(qName, page.toString());
    } else {
      params.delete(qName);
    }

    replace(`${pathname}?${params.toString()}`);
  }

  return (
    <HBox
      className={twMerge("mt-2 items-center justify-end", className)}
      {...rest}
    >
      <PaginationButton
        disabled={paginate.current_page == 1}
        onClick={() => handlePaginate(1)}
      >
        <LuChevronsLeft />
      </PaginationButton>

      <PaginationButton
        disabled={paginate.current_page == 1}
        onClick={() => handlePaginate(paginate.current_page - 1)}
      >
        <LuChevronLeft />
      </PaginationButton>

      <Text className="w-12 text-center text-sm text-gray-600">
        {paginate.current_page}/{paginate.last_page}
      </Text>

      <PaginationButton
        disabled={paginate.current_page == paginate.last_page}
        onClick={() => handlePaginate(paginate.current_page + 1)}
      >
        <LuChevronRight />
      </PaginationButton>

      <PaginationButton
        disabled={paginate.current_page == paginate.last_page}
        onClick={() => handlePaginate(paginate.last_page)}
      >
        <LuChevronsRight />
      </PaginationButton>
    </HBox>
  );
}
