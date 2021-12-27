import React from "react";
import { shallow } from "enzyme";
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
  test("renders the Input component with a blur listener", () => {
    const onBlur = jest.fn();
    const input = shallow(
      <Input
        id="test-text-input"
        name="test-text-input"
        type="text"
        onBlur={onBlur}
      />
    );
    input.simulate("blur", { target: { value: "Hello" } });
    expect(onBlur).toHaveBeenCalled();
  });
});
