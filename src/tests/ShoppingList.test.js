import React from "react";
import Enzyme from "enzyme";
import { shallow } from "enzyme";
import toJson from "enzyme-to-json";
import Adapter from "enzyme-adapter-react-16";
import ShoppingList from "../components/ShoppingList";

Enzyme.configure({ adapter: new Adapter() });
describe("ShoppingList component test", () => {
  test("should render empty give no items", () => {
    const wrapper = shallow(<ShoppingList />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });

  test("should render ShoppingItems when supplied with an items prop", () => {
    const testItems = [
      { name: "test item 1", checked: false },
      { name: "another test item", checked: true },
      { name: "test item number three", checked: false }
    ];
    const wrapper = shallow(<ShoppingList items={testItems} />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
