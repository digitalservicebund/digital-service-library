import React from "react";
import { render } from "@testing-library/react";

import Label from "./Label";

describe("Label", () => {
  test("renders the Label component", () => {
    render(<Label htmlFor="test-text-input">Test Label</Label>);
  });
});
