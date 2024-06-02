import { usePathname, useRouter, useSearchParams } from "next/navigation";

type useQueryParamProps = {
  queryParam: string;
};

export default function useQueryParam({ queryParam }: useQueryParamProps) {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();

  const set = (value: string) => {
    const params = new URLSearchParams(searchParams);

    if (value) {
      params.set(queryParam, value);
    } else {
      params.delete(queryParam);
    }

    replace(`${pathname}?${params.toString()}`);
  };

  const del = () => {
    const params = new URLSearchParams(searchParams);

    params.delete(queryParam);

    replace(`${pathname}?${params.toString()}`);
  };

  return { paramValue: searchParams.get(queryParam), set, del };
}
