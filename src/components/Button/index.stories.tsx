import { expect } from "@storybook/jest";
import type { Meta, StoryObj } from "@storybook/react";
import { within } from "@storybook/testing-library";
import { Button } from ".";

const meta: Meta<typeof Button> = {
  title: "Components/Button",
  component: Button,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Solid: Story = {
  args: {
    variant: "solid",
    children: "Button",
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const solidBtn = canvas.getByRole("button", { name: /button/i });
    const backgroundBtnColor =
      window.getComputedStyle(solidBtn).backgroundColor;
    const borderBtn = window.getComputedStyle(solidBtn).border;
    await expect(solidBtn).toBeInTheDocument();
    await expect(backgroundBtnColor).toBe("rgb(59, 130, 246)");
    await expect(borderBtn).toBe("0px solid rgb(229, 231, 235)");
  },
};

export const Outline: Story = {
  args: {
    variant: "outline",
    children: "Button",
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const solidBtn = canvas.getByRole("button", { name: /button/i });
    const backgroundBtnColor =
      window.getComputedStyle(solidBtn).backgroundColor;
    const borderBtn = window.getComputedStyle(solidBtn).border;
    await expect(solidBtn).toBeInTheDocument();
    await expect(backgroundBtnColor).toBe("rgba(0, 0, 0, 0)");
    await expect(borderBtn).toBe("2px solid rgb(59, 130, 246)");
  },
};

export const Ghost: Story = {
  args: {
    variant: "ghost",
    children: "Button",
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const solidBtn = canvas.getByRole("button", { name: /button/i });
    const backgroundBtnColor =
      window.getComputedStyle(solidBtn).backgroundColor;
    const borderBtn = window.getComputedStyle(solidBtn).border;
    await expect(solidBtn).toBeInTheDocument();
    await expect(backgroundBtnColor).toBe("rgba(0, 0, 0, 0)");
    await expect(borderBtn).toBe("0px solid rgb(229, 231, 235)");
  },
};
