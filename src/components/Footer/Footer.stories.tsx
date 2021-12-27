import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import Footer from "./Footer";

export default {
  title: "Patterns/Layout/Footer",
  component: Footer,
} as ComponentMeta<typeof Footer>;

const Template: ComponentStory<typeof Footer> = (args) => (
  <div style={{ backgroundColor: "#dedede" }}>
    <Footer>{args.children}</Footer>
  </div>
);

export const Basic = Template.bind({});
Basic.args = {
  children: [<p>Item 1</p>, <p>Item 2</p>],
};
Basic.parameters = {
  docs: {
    source: {
      code: `
<Footer>
  <ul>
    <li>Item 1</li>
    <li>Item 2</li>
  </ul>
</Footer>`,
    },
  },
};
