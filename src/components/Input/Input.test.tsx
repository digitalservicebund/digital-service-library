import React from "react";
import { render } from "@testing-library/react";

import Input from "./Input";

describe("Input", () => {
  test("renders the Input component", () => {
    render(<Input id="test-text-input" name="test-text-input" type="text" />);
  });
  test("renders the Input component - disabled", () => {
    render(
      <Input
        id="test-text-input"
        name="test-text-input"
        type="text"
        disabled={true}
      />
    );
  });
});
