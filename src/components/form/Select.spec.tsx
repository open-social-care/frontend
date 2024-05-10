import { expect, test } from "@playwright/experimental-ct-react";
import Select, { SelectItem } from "./Select";

const options: SelectItem[] = [
  {
    label: "Option 1",
    value: "1",
  },
  {
    label: "Option 2",
    value: "2",
  },
];

// incremented 1 because select contains 1 option item by default
const optionsCount = options.length + 1;

const option2 = options[1];

test("options should be rendered", async ({ mount }) => {
  const component = await mount(<Select data={options} />);

  const rederedOptions = component.getByRole("option");

  await expect(rederedOptions).toHaveCount(optionsCount);

  const renderedOption2 = component.getByRole("option").nth(2);

  await expect(renderedOption2).toContainText(option2.label);
  await expect(renderedOption2).toHaveAttribute("value", option2.value);
});

test("option should be selected", async ({ mount }) => {
  const component = await mount(<Select data={options} />);

  const select = component.locator("select");

  await select.selectOption(option2.label);

  await expect(select).toHaveValue(option2.value);
});
