import { test, expect } from "@playwright/experimental-ct-react";
import Input from "./Input";

test("input should be rendered without label", async ({ mount }) => {
  const component = await mount(<Input />);

  await expect(component.getByTestId("label")).not.toBeVisible();
});

test("input should be rendered with label", async ({ mount }) => {
  const component = await mount(<Input label="label example" />);

  await expect(component.getByTestId("label")).toContainText("label example");
});

test("input must allow text to be written", async ({ mount }) => {
  const component = await mount(<Input />);

  await component.locator("input").fill("my-text");

  await expect(component.locator("input")).toHaveValue("my-text");
});

test("input must show field error", async ({ mount }) => {
  const fieldError = "This text is not valid.";

  const component = await mount(<Input errors={[fieldError]} />);

  await expect(component.getByTestId("errors")).toHaveText(fieldError);

  await expect(component.getByTestId("errors").locator("p")).toHaveClass(/text-red-400/);
});
