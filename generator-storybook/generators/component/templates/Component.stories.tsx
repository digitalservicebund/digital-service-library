import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import <%= name %> from "./<%= name %>";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Atoms/<%= name %>",
  component: <%= name %>,
} as ComponentMeta<typeof <%= name %>>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof <%= name %>> = (args) => <<%= name %> {...args} />;

export const Basic = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Basic.args = {
};
Basic.parameters = {
  docs: {
    source: {
      code: '<<%= name %> />',
    },
  },
};

export const Variant = Template.bind({});
Variant.args = {
};

Variant.parameters = {
  docs: {
    source: {
      code: '<<%= name %> />',
    },
  },
};
