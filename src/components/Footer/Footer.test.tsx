import React from "react";
import { render } from "@testing-library/react";

import Footer from "./Footer";

describe("Footer", () => {
  test("renders the Footer component", () => {
    render(<Footer></Footer>);
  });
  test("renders the Footer component with children", () => {
    render(
      <Footer>
        <p>Text</p>
        <p>Text</p>
      </Footer>
    );
  });
});
