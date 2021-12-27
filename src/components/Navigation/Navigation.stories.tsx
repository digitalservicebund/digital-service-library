import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import Layout from "../Layout";
import Main from "../Main";
import Navigation from "./Navigation";

export default {
  title: "Patterns/Layout/Navigation",
  component: Navigation,
} as ComponentMeta<typeof Navigation>;

const Template: ComponentStory<typeof Navigation> = (args) => (
  <Layout>
    <Navigation>{args.children}</Navigation>
    <Main>
      <p>Hello</p>
    </Main>
  </Layout>
);

export const Basic = Template.bind({});
Basic.args = {
  children: [<p>Item 1</p>, <p>Item 2</p>],
};
Basic.parameters = {
  docs: {
    source: {
      code: `
<Layout>
  <Navigation>
    <ul>
      <li>Item 1</li>
      <li>Item 2</li>
    </ul>
  </Navigation>
  <Main>
    <p>Hello</p>
  </Main>
</Layout>`,
    },
  },
};
