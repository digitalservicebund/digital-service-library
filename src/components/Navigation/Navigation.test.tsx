import React from "react";
import { render } from "@testing-library/react";

import Navigation from "./Navigation";

describe("Navigation", () => {
  test("renders the Navigation component", () => {
    render(<Navigation></Navigation>);
  });
  test("renders the Navigation component with children", () => {
    render(
      <Navigation>
        <p>Text</p>
        <p>Text</p>
      </Navigation>
    );
  });
});
