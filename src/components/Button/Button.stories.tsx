import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import Button from "./Button";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Atoms/Button",
  component: Button,
  argTypes: { onClick: { action: "clicked" } },
} as ComponentMeta<typeof Button>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
  label: "Weiter",
  primary: true,
};
Primary.parameters = {
  docs: {
    source: {
      code: '<Button label="Weiter" primary={true} />',
    },
  },
};

export const PrimaryDisabled = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
PrimaryDisabled.args = {
  label: "Weiter",
  primary: true,
  disabled: true,
};
PrimaryDisabled.parameters = {
  docs: {
    source: {
      code: '<Button label="Weiter" />',
    },
  },
};

export const Secondary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Secondary.args = {
  label: "Weiter",
};
Secondary.parameters = {
  docs: {
    source: {
      code: '<Button label="Weiter" />',
    },
  },
};

export const SecondaryDisabled = Template.bind({});
SecondaryDisabled.args = {
  label: "Deaktiviert",
  disabled: true,
};

SecondaryDisabled.parameters = {
  docs: {
    source: {
      code: '<Button label="Deaktiviert" disabled={true} />',
    },
  },
};

export const Tertiary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Tertiary.args = {
  label: "Weiter",
  tertiary: true,
};
Tertiary.parameters = {
  docs: {
    source: {
      code: '<Button label="Weiter" />',
    },
  },
};

export const TertiaryDisabled = Template.bind({});
TertiaryDisabled.args = {
  label: "Deaktiviert",
  disabled: true,
  tertiary: true,
};

TertiaryDisabled.parameters = {
  docs: {
    source: {
      code: '<Button label="Deaktiviert" disabled={true} />',
    },
  },
};
