import { mount } from "enzyme";
import _ from "lodash";
import React from "react";
import { Provider } from "react-redux";
import { Router } from "react-router-dom";
import history from "../../../history";
import mockArtistList from "../../../mockArtistList.json";
import makeMockStore from "../../../store/makeMockStore";
import Favorites from "../Favorites";

const store = makeMockStore({
  artist: null,
  searchHistory: null,
  favorites: { ..._.mapKeys(mockArtistList, "id") },
});

describe("Favorites Page", () => {
  let wrapped;

  beforeEach(() => {
    wrapped = mount(
      <Provider store={store}>
        <Router history={history}>
          <Favorites />
        </Router>
      </Provider>
    );
  });
  afterEach(() => {
    wrapped.unmount();
  });

  it("displays an artist grid", (done) => {
    expect(wrapped.find("ArtistGrid").length).toEqual(1);
    done();
  });
});
