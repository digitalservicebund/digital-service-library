import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import Input from "./Input";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Atoms/Input",
  component: Input,
  argTypes: { onClick: { action: "clicked" } },
} as ComponentMeta<typeof Input>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Input> = (args) => <Input {...args} />;

export const Basic = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Basic.args = {
  id: "text-input",
  name: "text-input",
  type: "text",
};
Basic.parameters = {
  docs: {
    source: {
      code: '<Button label="Weiter" />',
    },
  },
};

export const Disabled = Template.bind({});
Disabled.args = {
  id: "disabled-text-input",
  name: "disabled-text-input",
  type: "text",
  disabled: true,
};

Disabled.parameters = {
  docs: {
    source: {
      code: '<Input id="disabled-input" name="test-input" type="text" disabled={true} />',
    },
  },
};

export const Numeric = Template.bind({});
Numeric.args = {
  id: "numeric-text-input",
  name: "numeric-text-input",
  type: "number",
};

Numeric.parameters = {
  docs: {
    source: {
      code: '<Input id="test-numeric-input" name="test-input" type="text" />',
    },
  },
};

export const Placeholder = Template.bind({});
Placeholder.args = {
  id: "placeholder-text-input",
  name: "placeholder-text-input",
  type: "search",
  placeholder: "Search...",
};

Placeholder.parameters = {
  docs: {
    source: {
      code: '<Input id="test-text-input" name="test-input" placeholder="Search..." type="text" disabled={true} />',
    },
  },
};
