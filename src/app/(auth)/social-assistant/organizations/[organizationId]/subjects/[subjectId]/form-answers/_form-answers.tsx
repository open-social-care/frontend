import { HBox, Paper } from "@/components/containers";
import { CardAction, Pagination, Text } from "@/components/ui";
import { t } from "@/lang";
import { FormAnswer } from "@/schemas";
import { AiOutlineFileSearch } from "react-icons/ai";
import { fetchFormAnswers } from "./_actions";

type FormAnswersProps = {
  subjectId: number;
  page: number;
  search: string;
};

export default async function FormAnswers({ subjectId, page, search }: FormAnswersProps) {
  const { data, pagination } = await fetchFormAnswers(subjectId, search, page);

  const formAnswers = FormAnswer.array().parse(data);

  return (
    <>
      {formAnswers.map((formAnswer) => (
        <Paper
          className="mt-1"
          key={formAnswer.id}
        >
          <Text className="font-semibold">{formAnswer.form_template_title}</Text>

          <Text className="text-sm">
            {t("labels.filled_by")}
            {": "}
            {formAnswer.user_name}
          </Text>

          <Text className="text-sm">
            {t("labels.date")}
            {": "}
            {formAnswer.created_at}
          </Text>

          <HBox className="mt-4 justify-end gap-4">
            <CardAction
              title={t("general_actions.view")}
              href={`form-answers/${formAnswer.id}`}
              icon={<AiOutlineFileSearch />}
            />
          </HBox>
        </Paper>
      ))}

      <Pagination paginate={pagination} />
    </>
  );
}
