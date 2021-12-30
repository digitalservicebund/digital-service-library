import React from "react";
import { render } from "@testing-library/react";

import {
  ChevronLeft,
  ChevronRight,
  ChevronUp,
  ChevronDown,
  Cloud,
  Close,
  Plus,
  Link,
  Search,
  Bin,
  Pencil,
  External,
  Export,
  Circle,
  Download,
  Bullet,
} from "./Icons";

describe("Icons", () => {
  test("renders the ChevronLeft Icon", () => {
    render(<ChevronLeft />);
  });
  test("renders the ChevronRight Icon", () => {
    render(<ChevronRight />);
  });
  test("renders the ChevronUp Icon", () => {
    render(<ChevronUp />);
  });
  test("renders the ChevronDown Icon", () => {
    render(<ChevronDown />);
  });
  test("renders the Cloud Icon", () => {
    render(<Cloud />);
  });
  test("renders the Close Icon", () => {
    render(<Close />);
  });
  test("renders the Plus Icon", () => {
    render(<Plus />);
  });
  test("renders the Link Icon", () => {
    render(<Link />);
  });
  test("renders the Search Icon", () => {
    render(<Search />);
  });
  test("renders the Bin Icon", () => {
    render(<Bin />);
  });
  test("renders the Pencil Icon", () => {
    render(<Pencil />);
  });
  test("renders the External Icon", () => {
    render(<External />);
  });
  test("renders the Export Icon", () => {
    render(<Export />);
  });
  test("renders the Circle Icon", () => {
    render(<Circle />);
  });
  test("renders the Download Icon", () => {
    render(<Download />);
  });
  test("renders the Bullet Icon", () => {
    render(<Bullet />);
  });
});
