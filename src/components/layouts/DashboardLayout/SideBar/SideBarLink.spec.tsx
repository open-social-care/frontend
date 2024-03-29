import { test } from "@playwright/experimental-ct-react";
import SideBarLink from "./SideBarLink";

test("input should be rendered with label", async ({ mount }) => {
  const label = "Link name";

  const component = await mount(
    <SideBarLink
      icon={<></>}
      href=""
    >
      {label}
    </SideBarLink>,
  );

  // await expect(component.getByTestId("label")).toContainText(label);
});
