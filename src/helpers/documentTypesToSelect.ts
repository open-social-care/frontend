import { SelectItem } from "@/components/form/Select";
import { documentTypes } from "@/enums/documentTypes";
import { t } from "@/lang";

export default function documentTypesToSelect(): SelectItem[] {
  return Object.values(documentTypes).map((type) => {
    return {
      label: t(`document_types.${type}`),
      value: type,
    };
  });
}
