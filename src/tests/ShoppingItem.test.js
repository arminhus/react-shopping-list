import React from "react";
import Enzyme from "enzyme";
import { shallow } from "enzyme";
import toJson from "enzyme-to-json";
import Adapter from "enzyme-adapter-react-16";

import ShoppingItem from "../components/ShoppingItem";

Enzyme.configure({ adapter: new Adapter() });
describe("ShoppingItem Component Testing", () => {
  test("should render empty give no item", () => {
    const wrapper = shallow(<ShoppingItem />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });

  test("should render the item when supplied", () => {
    const testItem = { name: "test-item", checked: false };
    const wrapper = shallow(<ShoppingItem item={testItem} />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });

  test("should strike through checked items", () => {
    const testItem = { name: "check-item", checked: true };
    const wrapper = shallow(<ShoppingItem item={testItem} />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
