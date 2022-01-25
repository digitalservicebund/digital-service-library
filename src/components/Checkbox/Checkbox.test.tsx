import React from "react";
import { render } from "@testing-library/react";

import Checkbox from "./Checkbox";

describe("Checkbox", () => {
  test("renders the Checkbox component", () => {
    render(<Checkbox />);
  });
});

describe("Checkbox with error", () => {
  test("renders the Checkbox component", () => {
    render(<Checkbox error={true} />);
  });
});
