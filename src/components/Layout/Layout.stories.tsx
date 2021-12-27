import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import "../../index.css";
import Layout from "./Layout";
import Main from "../Main";
import Navigation from "../Navigation";
import Footer from "../Footer";

export default {
  title: "Patterns/Layout/Layout",
  component: Layout,
  parameters: {
    layout: "fullscreen",
  },
} as ComponentMeta<typeof Layout>;

const Template: ComponentStory<typeof Layout> = (args) => (
  <Layout {...args}>{args.children}</Layout>
);

export const Concept = Template.bind({});
Concept.args = {
  footer: <div className="p-4 bg-green-200">footer</div>,
  sidebarNavigation: (
    <div className="h-full p-4 bg-yellow-500">
      sidebarNavigation
      <br />
      (hidden on smaller screens)
      <div className="bg-gray-200 h-96">long content</div>
    </div>
  ),
  topNavigation: (
    <div className="p-4 bg-blue-300">
      topNavigation (hidden on larger screens)
    </div>
  ),
  children: [
    <div className="h-full p-4 bg-red-500">
      children
      <div className="bg-gray-200 h-96">long content</div>
    </div>,
  ],
};
Concept.parameters = {
  docs: {
    source: {
      code: `
<Layout footer={…} sidebarNavigation={…} topNavigation={…}>…</Layout>
`,
    },
  },
};

export const Basic = Template.bind({});
Basic.args = {
  footer: (
    <Footer>
      <p>Footer</p>
    </Footer>
  ),
  sidebarNavigation: (
    <Navigation>
      <ul>
        <li>Nav item</li>
      </ul>
    </Navigation>
  ),
  topNavigation: (
    <Navigation>
      <ul>
        <li>Nav item</li>
      </ul>
    </Navigation>
  ),
  children: [<Main>Main content</Main>],
};
Basic.parameters = {
  controls: { hideNoControlsWarning: true },
  docs: {
    source: {
      code: `
<Layout footer={…} sidebarNavigation={…} topNavigation={…}>…</Layout>
`,
    },
  },
};
