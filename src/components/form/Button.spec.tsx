import { render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import Button from "./Button";

jest.mock("react-dom", () => ({
  ...jest.requireActual("react-dom"),
  useFormStatus: () => ({ pending: false }),
}));

test("button should be accept click event", async () => {
  let clicked = false;

  const component = render(
    <Button
      onClick={() => {
        clicked = true;
      }}
    />,
  );

  const btn = await component.findByTestId("button");

  await userEvent.click(btn);

  expect(clicked).toBeTruthy();
});
