import React from "react";
import { render } from "@testing-library/react";

import <%= name %> from "./<%= name %>";

describe("<%= name %>", () => {
  test("renders the <%= name %> component", () => {
    render(<<%= name %> />);
  });
});
