import {
  test,
  expect,
} from "@playwright/experimental-ct-react";
import FlashMessage from "./FlashMessage";

test("error flash message should be rendered in red", async ({
  mount,
}) => {
  const message = "This is a error message.";

  const component = await mount(
    <FlashMessage
      type="error"
      message={message}
    />,
  );

  await expect(component).toContainText(message);

  await expect(component).toHaveClass(
    /bg-red-500/,
  );
});

test("success flash message should be rendered in green", async ({
  mount,
}) => {
  const message = "This is a success message.";

  const component = await mount(
    <FlashMessage
      type="success"
      message={message}
    />,
  );

  await expect(component).toContainText(message);

  await expect(component).toHaveClass(
    /bg-emerald-500/,
  );
});
