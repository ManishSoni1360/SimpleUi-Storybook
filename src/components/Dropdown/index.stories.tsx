import type { Meta, StoryObj } from "@storybook/react";
import { Dropdown } from ".";

const meta: Meta<typeof Dropdown> = {
  title: "Components/Dropdown",
  component: Dropdown,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof meta>;

const options = [
  { label: "India", value: "india" },
  { label: "Algeria", value: "algeria" },
  { label: "Afghanistan", value: "afghanistan" },
  { label: "Australia", value: "australia" },
];

export const Static: Story = {
  args: {
    options: options,
  },
};

export const Searchable: Story = {
  args: {
    options: options,
    isSearchable: true,
  },
};

export const mutliSearchable: Story = {
  args: {
    options: options,
    isSearchable: true,
    isMulti: true,
  },
};

export const loadOnInput: Story = {
  args: {
    options: options,
    loadOptionOnChange: true,
  },
};
