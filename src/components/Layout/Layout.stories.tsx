import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import Layout from "./Layout";
import Main from "../Main";
import Navigation from "../Navigation";
import Footer from "../Footer";

export default {
  title: "Patterns/Layout/Layout",
  component: Layout,
} as ComponentMeta<typeof Layout>;

const Template: ComponentStory<typeof Layout> = () => (
  <div>
    <Layout>
      <Navigation>
        <ul>
          <li>Nav Item</li>
        </ul>
      </Navigation>
      <Main>
        <p>Main Content</p>
      </Main>
      <Footer>
        <p>Footer</p>
      </Footer>
    </Layout>
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
<Layout>
  <div className="navigation">
    <ul>
      <li>Item 1</li>
    </ul>
  </div>
  <div className="content">
    <h1>Content</h1>
  </div>
</Layout>`,
    },
  },
};
