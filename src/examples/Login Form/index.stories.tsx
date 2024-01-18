import { expect } from "@storybook/jest";
import type { Meta, StoryObj } from "@storybook/react";
import { within } from "@storybook/testing-library";
import { LoginForm } from ".";

const meta: Meta<typeof LoginForm> = {
  title: "Examples/Form",
  component: LoginForm,
  parameters: {
    layout: "centered",
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Login: Story = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    const loginTxt = canvas.getByRole("heading", { name: /login/i });
    const loginStatus = canvas.getByText(
      "Please enter your credentials to login"
    );
    const emailInput = canvas.getByPlaceholderText("Email");
    const passwordInput = canvas.getByPlaceholderText("Password");
    const loginBtn = canvas.getByRole("button", { name: /login/i });
    const backgroundBtnColor =
      window.getComputedStyle(loginBtn).backgroundColor;

    await expect(loginTxt).toBeInTheDocument();
    await expect(loginStatus).toBeInTheDocument();
    await expect(emailInput).toBeInTheDocument();
    await expect(passwordInput).toBeInTheDocument();
    await expect(loginBtn).toBeInTheDocument();
    await expect(backgroundBtnColor).toBe("rgb(59, 130, 246)");
  },
};
