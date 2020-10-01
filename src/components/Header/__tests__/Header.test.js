import { mount } from "enzyme";
import React from "react";
import { Router } from "react-router-dom";
import history from "../../../history";
import Header from "../Header";

describe("Header", () => {
  let wrapped;

  beforeEach(() => {
    wrapped = mount(
      <Router history={history}>
        <Header />
      </Router>
    );
  });

  afterEach(() => {
    wrapped.unmount();
  });

  it("displays a logo with a home link", (done) => {
    const logoLink = wrapped.findWhere(
      (n) => n.name() === "Link" && n.prop("to") === "/"
    );
    expect(logoLink.length).toEqual(1);
    expect(logoLink.render().text()).toContain("Artsy");
    done();
  });

  it("displays a privacy link", (done) => {
    const logoLink = wrapped.findWhere(
      (n) => n.name() === "Link" && n.prop("to") === "/privacy"
    );
    expect(logoLink.length).toEqual(1);
    expect(logoLink.render().text()).toContain("Privacy");
    done();
  });

  it("displays a about link", (done) => {
    const logoLink = wrapped.findWhere(
      (n) => n.name() === "Link" && n.prop("to") === "/about"
    );
    expect(logoLink.length).toEqual(1);
    expect(logoLink.render().text()).toContain("About");
    done();
  });

  it("displays a contact link", (done) => {
    const logoLink = wrapped.findWhere(
      (n) => n.name() === "Link" && n.prop("to") === "/contact"
    );
    expect(logoLink.length).toEqual(1);
    expect(logoLink.render().text()).toContain("Contact");
    done();
  });
});
