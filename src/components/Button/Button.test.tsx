import React from "react";
import { render } from "@testing-library/react";

import Button from "./Button";

describe("Button", () => {
  test("renders the Button component", () => {
    render(<Button label="Hello world!" />);
  });
  test("renders the Button component - disabled", () => {
    render(<Button label="Hello world!" disabled={true} />);
  });
});
