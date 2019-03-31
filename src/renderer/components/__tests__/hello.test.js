import React from "react";
import renderer from "react-test-renderer";
import { shallow } from "enzyme";
import Hello from "../hello";

test("should render text", () => {
  const props = {};
  const element = shallow(
    <Hello {...props} />
  );

  expect(element.find("h1").text()).toBe("Hello Electron!!");
});

test("snapshot", () => {
  const props = {};
  const element = renderer.create(<Hello {...props} />).toJSON();

  expect(element).toMatchSnapshot();
});
