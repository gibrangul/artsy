import { mount } from "enzyme";
import React from "react";
import DatePicker from "react-datepicker";
import FiltersBar from "../FiltersBar";

describe("Filters Bar", () => {
  let wrapped;

  beforeEach(() => {
    wrapped = mount(<FiltersBar onFilter={(value) => value} />);
    wrapped
      .find("input")
      .simulate("change", {
        target: { value: "denver" },
      })
      .update();
  });

  afterEach(() => {
    wrapped.unmount();
  });

  it("has an input and 2 date buttons", (done) => {
    expect(wrapped.find("input").length).toEqual(1);
    expect(wrapped.find(DatePicker).length).toEqual(2);
    done();
  });

  it("has an input that users can type in", (done) => {
    expect(wrapped.find("input").prop("value")).toEqual("denver");
    done();
  });

  it("has a start datePicker", (done) => {
    const date = new Date();
    wrapped.find(DatePicker).at(0).invoke("onChange")(date);
    expect(wrapped.find(DatePicker).at(0).prop("selected")).toEqual(date);
    done();
  });

  it("has an end datePicker", (done) => {
    const date = new Date();
    wrapped.find(DatePicker).at(1).invoke("onChange")(date);
    expect(wrapped.find(DatePicker).at(1).prop("selected")).toEqual(date);
    done();
  });
});
