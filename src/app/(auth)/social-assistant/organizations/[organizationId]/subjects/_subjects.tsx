import { HBox, Paper } from "@/components/containers";
import { AiOutlineEdit } from "react-icons/ai";

import { t } from "@/lang";

import { Text } from "@/components/ui";
import CardAction from "@/components/ui/CardAction";
import Pagination from "@/components/ui/Pagination";
import { Roles } from "@/enums/Roles";
import { Subject } from "@/schemas";
import { fetchSubjectsAction } from "./_actions";

interface SubjectListProps {
  organizationId: number;
  search?: string;
  page?: number;
}

export default async function SubjectList({ organizationId, search, page }: SubjectListProps) {
  const { data, pagination } = await fetchSubjectsAction(organizationId, search, page);

  const subjects = Subject.array().parse(data);

  if (subjects.length == 0) {
    return <Text>{t("informations.subjects_not_found")}</Text>;
  }

  return (
    <>
      {subjects.map((subject) => (
        <Paper
          className="mt-1"
          key={subject.id}
        >
          <Text className="font-semibold">{subject.name}</Text>
          <Text className="text-sm">{subject.birth_date}</Text>

          <HBox className="mt-4 justify-end gap-4">
            <CardAction
              title={t("general_actions.manage")}
              href={`/${Roles.SOCIAL_ASSISTANT}/organizations/${organizationId}/subjects/${subject.id}/edit`}
              icon={<AiOutlineEdit />}
            />
          </HBox>
        </Paper>
      ))}

      <Pagination paginate={pagination} />
    </>
  );
}
