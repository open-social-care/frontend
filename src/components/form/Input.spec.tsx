import { test, expect } from '@playwright/experimental-ct-react';
import Input from './Input';

test('input should be rendered without label', async ({ mount }) => {
  let clicked = false;

  const component = await mount(
    <Input />
  );

  await expect(component.getByTestId("label")).not.toBeVisible()
});

test('input should be rendered with label', async ({ mount }) => {
  let clicked = false;

  const component = await mount(
    <Input label='label example'/>
  );

  await expect(component.getByTestId("label")).toContainText("label example")
});

