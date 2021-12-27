import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import Layout from "../Layout";
import Main from "./Main";

export default {
  title: "Patterns/Layout/Main",
  component: Main,
} as ComponentMeta<typeof Main>;

const Template: ComponentStory<typeof Main> = (args) => (
  <Layout>
    <Main>{args.children}</Main>
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
<MainWrapper>
  <Main>
    <h1>Content</h1>
  </Main>
</MainWrapper>`,
    },
  },
};
