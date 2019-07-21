import React from "react";
import Enzyme from "enzyme";
import { shallow } from "enzyme";
import toJson from "enzyme-to-json";
import Adapter from "enzyme-adapter-react-16";

import AddItemForm from "../components/AddItemForm";

Enzyme.configure({ adapter: new Adapter() });

describe("AddItemFrom Component Test", () => {
  test("Should render the complete form", () => {
    const wrapper = shallow(<AddItemForm />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
