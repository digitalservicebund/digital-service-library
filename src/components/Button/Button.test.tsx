import React from "react";
import { shallow } from "enzyme";
import { render } from "@testing-library/react";

import Button from "./Button";

describe("Button", () => {
  test("renders the Button component", () => {
    render(<Button label="Hello world!" />);
  });
  test("renders the Button component - disabled", () => {
    render(<Button label="Hello world!" disabled={true} />);
  });
  test("renders the Button component with a click listener", () => {
    const onClick = jest.fn();
    const btn = shallow(
      <Button label="Hello world!" disabled={true} onClick={onClick} />
    );
    btn.find("button").simulate("click");
    expect(onClick).toHaveBeenCalled();
  });
});
