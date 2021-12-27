import React from "react";
import { render } from "@testing-library/react";

import Layout from "./Layout";

describe("Layout", () => {
  test("renders the Layout component with children", () => {
    render(
      <Layout
        footer={<p>footer</p>}
        sidebarNavigation={<p>sidebarNavigation</p>}
        topNavigation={<p>topNavigation</p>}
      >
        <p>children</p>
      </Layout>
    );
  });
});
