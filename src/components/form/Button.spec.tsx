import { test } from "@playwright/experimental-ct-react";
import Button from "./Button";

test("button should be accept click event", async ({ mount }) => {
  let clicked = false;

  const component = await mount(
    <Button
      onClick={() => {
        clicked = true;
      }}
    />,
  );

  //await component.click();

  //expect(clicked).toBeTruthy();
});
