import { shallow } from "enzyme";
import React from "react";
import Contact from "../Contact";

describe("Contact Page", () => {
  let wrapped;

  beforeEach(() => {
    wrapped = shallow(<Contact />);
  });

  it("displays a title", (done) => {
    expect(wrapped.render().text()).toContain("Contact");
    done();
  });

  it("displays an email", (done) => {
    expect(wrapped.render().text()).toContain("info@artsy.example.com");
    done();
  });

  it("displays a telephone", (done) => {
    expect(wrapped.render().text()).toContain("+92-333-1234567");
    done();
  });

  it("displays an address and location", (done) => {
    expect(wrapped.render().text()).toContain("Margalla Hills, Islamabad");
    expect(wrapped.find("iframe").prop("title")).toEqual("office-location");
    done();
  });
});
