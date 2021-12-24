import React from "react";
import { shallow } from "enzyme";
import { render } from "@testing-library/react";

import Layout from "./Layout";

describe("Layout", () => {
  test("renders the Layout component", () => {
    render(<Layout></Layout>);
  });
  test("renders the Layout component with children", () => {
    render(
      <Layout>
        <p>Text</p>
        <p>Text</p>
      </Layout>
    );
  });
});
