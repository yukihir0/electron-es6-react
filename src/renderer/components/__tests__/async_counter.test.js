import React from "react";
import renderer from "react-test-renderer";
import { shallow, mount } from "enzyme";
import AsyncCounter from "../async_counter";

test("should render count", () => {
  const props = {
    async_value: 0
  };
  const element = shallow(
    <AsyncCounter {...props} />
  );

  expect(element.find("p").text()).toBe("Clicked: 0 times");
});

test("if increment button click, should call increment function", () => {
  const mockFn= jest.fn();
  const props = {
    async_value: 0,
    onAsyncIncrement: mockFn,
  };
  const element = shallow(
    <AsyncCounter {...props} />
  );

  element.find("#btn-increment").simulate("click");
  expect(mockFn).toHaveBeenCalled();
});

test("if decrement button click, should call decrement function", () => {
  const mockFn= jest.fn();
  const props = {
    async_value: 0,
    onAsyncDecrement: mockFn,
  };
  const element = shallow(
    <AsyncCounter {...props} />
  );

  element.find("#btn-decrement").simulate("click");
  expect(mockFn).toHaveBeenCalled();
});

test("snapshot", () => {
  const props = {
    async_value: 0
  };
  const element = renderer.create(<AsyncCounter {...props} />).toJSON();

  expect(element).toMatchSnapshot();
});
