import React from "react";
import renderer from "react-test-renderer";
import { shallow, mount } from "enzyme";
import QiitaButton from "../qiita_button";

test("should render items", () => {
  const props = {
    items: [
      { title: "hoge" },
      { title: "fuga" }
    ]
  };
  const element = shallow(
    <QiitaButton{...props} />
  );

  expect(element.find("ul").html()).toBe("<ul><li>hoge</li><li>fuga</li></ul>");
});

test("if button click, should call requestItem function", () => {
  const mockFn= jest.fn();
  const props = {
    items: [],
    onClickQiitaButton: mockFn,
  };
  const element = shallow(
    <QiitaButton{...props} />
  );

  element.find("#btn-qiita").simulate("click");
  expect(mockFn).toHaveBeenCalled();
});

test("snapshot", () => {
  const props = {
    items: []
  };
  const element = renderer.create(<QiitaButton{...props} />).toJSON();

  expect(element).toMatchSnapshot();
});
