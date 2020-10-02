import { mount } from "enzyme";
import React from "react";
import { Provider } from "react-redux";
import { Router } from "react-router-dom";
import SearchHistory from "../SearchHistory";
import mockArtistList from "../../../mockArtistList.json";
import makeMockStore from "../../../store/makeMockStore";
import history from "../../../history";
import _ from "lodash";

const store = makeMockStore({
  artist: null,
  searchHistory: { ..._.mapKeys(mockArtistList, "id") },
  favorites: null,
});

describe("Search History Page", () => {
  let wrapped;

  beforeEach(() => {
    wrapped = mount(
      <Provider store={store}>
        <Router history={history}>
          <SearchHistory />
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
