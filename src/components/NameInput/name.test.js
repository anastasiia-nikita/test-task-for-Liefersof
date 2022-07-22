import React from "react";
import { NameInput } from "./NameInput";
import { shallow } from "enzyme";
// const NameInput = require('./NameInput');

const setUp = (props) => shallow(<NameInput {...props} />);

describe("Name component", () => {
  let component;
  beforeEach(() => {
    component = setUp();
  });

  it("should contain input", () => {
    const wrapper = component.find('Input');
    expect(wrapper.length).toBe(1);
  });
});