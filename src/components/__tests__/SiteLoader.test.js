import { shallow } from "enzyme";
import React from "react";
import { ScaleLoader } from "react-spinners";
import SiteLoader from "../SiteLoader";

describe("SiteLoader", () => {
  let wrapped;
  beforeEach(() => {
    wrapped = shallow(<SiteLoader />);
  });

  it("displays a scale loader", (done) => {
    expect(wrapped.find(ScaleLoader).length).toEqual(1);
    done();
  });
});
