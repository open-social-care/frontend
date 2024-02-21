import showNotification from "@/helpers/notification";
import { ActionRequest } from "@/schemas/action/ActionRequest";
import { ActionResponse } from "@/schemas/action/ActionResponse";
import { useState } from "react";

export default function useAction(props: {
  action: (values?: ActionRequest) => Promise<ActionResponse>;
  onComplete?: (actionResponse: ActionResponse) => void;
}) {
  const [loading, setLoading] = useState(false);
  const [response, setResponse] = useState<ActionResponse>();

  const actionHandler = async (values?: ActionRequest) => {
    setResponse(undefined);

    setLoading(true);

    const res = await props.action(values);

    props?.onComplete?.(res);

    showNotification(res.message, res.type);

    setLoading(false);
  };

  return {
    actionHandler,
    response,
    loading,
  };
}
