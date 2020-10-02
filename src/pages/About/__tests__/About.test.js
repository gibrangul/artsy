import { shallow } from "enzyme";
import React from "react";
import About from "../About";

describe("About Page", () => {
  let wrapped;

  beforeEach(() => {
    wrapped = shallow(<About />);
  });

  it("displays a title", (done) => {
    expect(wrapped.render().text()).toContain("About");
    done();
  });

  it("displays a message", (done) => {
    expect(wrapped.render().text()).toContain("Artsy is a search engine");
    done();
  });
});
