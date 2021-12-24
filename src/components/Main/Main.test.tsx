import React from "react";
import { render } from "@testing-library/react";

import Main from "./Main";

describe("Main", () => {
  test("renders the Main component", () => {
    render(<Main></Main>);
  });
  test("renders the Main component with children", () => {
    render(
      <Main>
        <p>Text</p>
        <p>Text</p>
      </Main>
    );
  });
});
