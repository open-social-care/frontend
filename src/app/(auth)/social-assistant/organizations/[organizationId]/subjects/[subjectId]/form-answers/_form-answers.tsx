import { Paper } from "@/components/containers";
import { CardAction, Pagination, Text } from "@/components/ui";
import { t } from "@/lang";
import { FormAnswer } from "@/schemas";
import dayjs from "dayjs";
import { AiOutlineCalendar, AiOutlineFileSearch, AiOutlineUser } from "react-icons/ai";
import { fetchFormAnswers } from "./_actions";

type FormAnswersProps = {
  subjectId: number;
  page: number;
  search: string;
};

export default async function FormAnswers({ subjectId, page, search }: FormAnswersProps) {
  const { data, pagination } = await fetchFormAnswers(subjectId, search, page);

  const formAnswers = FormAnswer.array().parse(data);

  if (formAnswers.length === 0) {
    return (
      <Text className="mt-20 text-center text-lg text-gray-500">
        {t("informations.form_answers_not_found")}
      </Text>
    );
  }

  return (
    <>
      {formAnswers.map((formAnswer) => (
        <Paper
          key={formAnswer.id}
          className="mb-6 flex flex-col items-start justify-between rounded-xl border border-gray-200 bg-white p-6 shadow-sm transition-shadow duration-300 hover:shadow-lg sm:flex-row sm:items-center"
        >
          <div className="flex flex-1 flex-col sm:flex-row sm:items-center sm:gap-8">
            <Text className="mb-2 text-xl font-semibold text-gray-900 sm:mb-0">
              {formAnswer.form_template_title}
            </Text>

            <div className="flex items-center gap-6 text-sm text-gray-500">
              <div className="flex items-center gap-1">
                <AiOutlineCalendar className="text-blue-500" />
                <span>{dayjs(formAnswer.created_at).format("DD/MM/YYYY HH:mm")}</span>
              </div>

              <div className="flex items-center gap-1">
                <AiOutlineUser className="text-green-500" />
                <span>{formAnswer.user_name}</span>
              </div>
            </div>
          </div>

          <CardAction
            title={t("general_actions.view")}
            href={`form-answers/${formAnswer.id}`}
            icon={<AiOutlineFileSearch />}
            className="mt-4 flex items-center gap-2 font-medium text-blue-600 transition-colors duration-200 hover:text-blue-800 sm:mt-0"
          />
        </Paper>
      ))}

      <Pagination
        paginate={pagination}
        className="mt-10"
      />
    </>
  );
}
