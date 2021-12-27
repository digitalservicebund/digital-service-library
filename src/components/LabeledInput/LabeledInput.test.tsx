import React from "react";
import { shallow } from "enzyme";
import { render } from "@testing-library/react";

import LabeledInput from "./LabeledInput";

describe("LabeledInput", () => {
  test("renders the LabeledInput component", () => {
    render(
      <LabeledInput
        id="test-text-input"
        name="test-text-input"
        label="text"
        type="text"
      />
    );
  });
  // test("renders the LabeledInput component - disabled", () => {
  //   render(
  //     <LabeledInput
  //       id="test-text-input"
  //       name="test-text-input"
  //       type="text"
  //       disabled={true}
  //     />
  //   );
  // });
  // test("renders the LabeledInput component with a blur listener", () => {
  //   const onBlur = jest.fn();
  //   const input = shallow(
  //     <LabeledInput
  //       id="test-text-input"
  //       name="test-text-input"
  //       type="text"
  //       onBlur={onBlur}
  //     />
  //   );
  //   input.simulate("blur", { target: { value: "Hello" } });
  //   expect(onBlur).toHaveBeenCalled();
  // });
});
