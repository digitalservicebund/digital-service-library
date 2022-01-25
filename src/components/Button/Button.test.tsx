import React from "react";
import { shallow } from "enzyme";
import { render } from "@testing-library/react";

import Button from "./Button";
import { BinIcon, ExportIcon } from "../Icons/index";

describe("Button", () => {
  test("renders the Button component", () => {
    render(<Button>Hello world!"</Button>);
  });
  test("renders the Button component - disabled", () => {
    render(<Button disabled>Hello World!</Button>);
  });
  test("renders a secondary Button component - disabled", () => {
    render(
      <Button secondary disabled>
        Hello World!
      </Button>
    );
  });
  test("renders a tertiary Button component - disabled", () => {
    render(
      <Button tertiary disabled>
        Hello World!
      </Button>
    );
  });
  test("renders a link", () => {
    render(<Button href="/">Hello World!</Button>);
  });
  test("renders an icon", () => {
    render(<Button icon={<ExportIcon />}>Hello World!</Button>);
  });
  test("renders with classNames", () => {
    render(
      <Button tiny={true} icon={<BinIcon />}>
        Hello World!
      </Button>
    );
  });
  test("throws an error when combining small and tiny", () => {
    try {
      render(
        <Button tiny={true} small={true} icon>
          Hello World!
        </Button>
      );
    } catch (e: any) {
      expect(e.message).toBe(
        "Invariant failed: Button is both small and tiny. Please choose one size."
      );
    }
  });
  test("renders the Button component with a click listener", () => {
    const onClick = jest.fn();
    const btn = shallow(
      <Button disabled onClick={onClick}>
        Hello world!
      </Button>
    );
    btn.find("button").simulate("click");
    expect(onClick).toHaveBeenCalled();
  });
});
