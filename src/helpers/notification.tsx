import i18n from "@/lang";
import { notifications } from "@mantine/notifications";

const notificationProps = {
  success: { color: "teal" },
  error: { color: "red" },
};

export default function showNotification(
  message: string,
  type: "success" | "error"
) {
  notifications.show({
    title: i18n.t(`notifications.title_${type}`),
    message: message,
    ...notificationProps[type],
  });
}
