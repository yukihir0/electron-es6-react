import React from "react";
import renderer from "react-test-renderer";
import { shallow, mount } from "enzyme";
import Counter from "../counter";

test("should render count", () => {
  const props = {
    value: 0
  };
  const element = shallow(
    <Counter {...props} />
  );

  expect(element.find("p").text()).toBe("Clicked: 0 times");
});

test("if increment button click, should call increment function", () => {
  const mockFn= jest.fn();
  const props = {
    value: 0,
    onIncrement: mockFn,
  };
  const element = shallow(
    <Counter {...props} />
  );

  element.find("#btn-increment").simulate("click");
  expect(mockFn).toHaveBeenCalled();
});

test("if decrement button click, should call decrement function", () => {
  const mockFn= jest.fn();
  const props = {
    value: 0,
    onDecrement: mockFn,
  };
  const element = shallow(
    <Counter {...props} />
  );

  element.find("#btn-decrement").simulate("click");
  expect(mockFn).toHaveBeenCalled();
});

test("snapshot", () => {
  const props = {
    value: 0
  };
  const element = renderer.create(<Counter {...props} />).toJSON();

  expect(element).toMatchSnapshot();
});
