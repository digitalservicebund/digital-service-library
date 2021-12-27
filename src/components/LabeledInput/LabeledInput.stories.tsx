import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import LabeledInput from "./LabeledInput";

export default {
  title: "Atoms/LabeledInput",
  component: LabeledInput,
  argTypes: { onClick: { action: "clicked" } },
} as ComponentMeta<typeof LabeledInput>;

const Template: ComponentStory<typeof LabeledInput> = (args) => (
  <LabeledInput {...args} />
);

export const Basic = Template.bind({});
Basic.args = {
  id: "text-input",
  name: "text-input",
  type: "text",
  label: "Label",
};
Basic.parameters = {
  docs: {
    source: {
      code: '<Input id="example-input" name="example-input" label="Test Label" type="text" />',
    },
  },
};
