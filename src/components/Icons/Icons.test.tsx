import React from "react";
import { render } from "@testing-library/react";

import {
  ChevronLeftIcon,
} from "./index";

describe("Icons", () => {
  test("renders the ChevronLeft Icon", () => {
    render(<ChevronLeftIcon />);
  });
});
