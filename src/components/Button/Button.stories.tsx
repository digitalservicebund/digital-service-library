import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import Button from "./Button";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Atoms/Button",
  component: Button,
} as ComponentMeta<typeof Button>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Basic = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Basic.args = {
  label: "Weiter",
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
  label: "Deaktiviert",
  disabled: true,
};

Disabled.parameters = {
  docs: {
    source: {
      code: '<Button label="Deaktiviert" disabled={true} />',
    },
  },
};
