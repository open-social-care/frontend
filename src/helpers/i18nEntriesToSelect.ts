import { t } from "@/lang";

type Options = "document_types";
// type Options = "document_types" | "another_types";

export default function i18nEntriesToSelect(scopeRoot: Options) {
  return Object.entries(t(scopeRoot)).map((entry) => ({
    value: entry[0],
    label: entry[1],
  }));
}
