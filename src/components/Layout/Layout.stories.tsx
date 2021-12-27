import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import "../../index.css";
import Layout from "./Layout";
import Main, { MainWrapper } from "../Main";
import Navigation from "../Navigation";
import Footer from "../Footer";

export default {
  title: "Patterns/Layout/Layout",
  component: Layout,
} as ComponentMeta<typeof Layout>;

const Template: ComponentStory<typeof Layout> = () => (
  <div style={{ minHeight: "400px" }}>
    <Layout>
      <Navigation>
        <ul>
          <li>Nav Item</li>
        </ul>
      </Navigation>
      <MainWrapper>
        <Main>
          <p>Main Content</p>
        </Main>
        <Footer>
          <p>Footer</p>
        </Footer>
      </MainWrapper>
    </Layout>
  </div>
);

export const Basic = Template.bind({});
Basic.args = {
  children: [<p>Item 1</p>, <p>Item 2</p>],
};
Basic.parameters = {
  controls: { hideNoControlsWarning: true },
  docs: {
    source: {
      code: `
<Layout>
  <Navigation>
    <ul>
      <li>Nav Item</li>
    </ul>
  </Navigation>
  <MainWrapper>
    <Main>
      <p>Main Content</p>
    </Main>
    <Footer>
      <p>Footer</p>
    </Footer>
  </MainWrapper>
</Layout>`,
    },
  },
};
