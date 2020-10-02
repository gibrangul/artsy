import { shallow } from "enzyme";
import React from "react";
import NotFound from "../NotFound";
import { Router } from "react-router-dom";
import history from "../../../history";

describe("About Page", () => {
  let wrapped;

  beforeEach(() => {
    wrapped = shallow(
      <Router history={history}>
        <NotFound />
      </Router>
    );
  });

  it("displays an Error Message", (done) => {
    expect(wrapped.render().text()).toContain("404");
    done();
  });
});
