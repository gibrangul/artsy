import { mount } from "enzyme";
import React from "react";
import SearchBar from "../SearchBar";

describe("SearchBar", () => {
  let wrapped;
  const placeholder = "Search Test";
  beforeEach(() => {
    wrapped = mount(
      <SearchBar onSearch={(value) => value} placeholder={placeholder} />
    );
    wrapped
      .find("input")
      .simulate("change", {
        target: { value: "maroon 5" },
      })
      .update();
  });

  afterEach(() => {
    wrapped.unmount();
  });

  it("has an input and a button", (done) => {
    expect(wrapped.find("input").length).toEqual(1);
    done();
  });

  it("has an input that users can type in", (done) => {
    expect(wrapped.find("input").prop("value")).toEqual("maroon 5");
    done();
  });

  it("has an input with a placeholder", (done) => {
    expect(wrapped.find("input").prop("placeholder")).toEqual(placeholder);
    done();
  });
});
