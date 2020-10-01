import { shallow } from "enzyme";
import React from "react";
import NewTabLink from "../NewTabLink";

describe("NewTabLink", () => {
  let wrapped;
  beforeEach(() => {
    wrapped = shallow(<NewTabLink />);
  });

  it("displays a single link with props to open in a new tab", (done) => {
    expect(wrapped.find("a").length).toEqual(1);
    expect(wrapped.find("a").prop("target")).toEqual("_blank");
    expect(wrapped.find("a").prop("rel")).toEqual("noopener noreferrer");
    done();
  });
});
