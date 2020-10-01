import { mount } from "enzyme";
import _ from "lodash";
import React from "react";
import { Provider } from "react-redux";
import { Router } from "react-router-dom";
import ArtistCard from "../../../components/ArtistCard/ArtistCard";
import SearchBar from "../../../components/SearchBar/SearchBar";
import SiteLoader from "../../../components/SiteLoader";
import history from "../../../history";
import mockArtistList from "../../../mockArtistList.json";
import makeMockStore from "../../../store/makeMockStore";
import Home from "../Home";

const store = makeMockStore({
  artist: {
    thumb_url: "https://photos.bandsintown.com/thumb/7982772.jpeg",
    mbid: "4c98aa1b-34eb-4336-987f-5e50aa059c00",
    support_url: "",
    facebook_page_url: "http://www.facebook.com/10638675398",
    image_url: "https://photos.bandsintown.com/large/7982772.jpeg",
    name: "The Script",
    id: "40539",
    tracker_count: 1728855,
    upcoming_event_count: 13,
    url: "https://www.bandsintown.com/a/40539?came_from=267&app_id=aaa",
    searchDate: 1601526460,
    addDate: 1601526462,
  },
  searchHistory: { ..._.mapKeys(mockArtistList, "id") },
  favorites: { ..._.mapKeys(mockArtistList, "id") },
});

describe("Home Page", () => {
  let wrapped;

  const artist = {
    thumb_url: "https://photos.bandsintown.com/thumb/7982772.jpeg",
    mbid: "4c98aa1b-34eb-4336-987f-5e50aa059c00",
    support_url: "",
    facebook_page_url: "http://www.facebook.com/10638675398",
    image_url: "https://photos.bandsintown.com/large/7982772.jpeg",
    name: "The Script",
    id: "40539",
    tracker_count: 1728855,
    upcoming_event_count: 13,
    url: "https://www.bandsintown.com/a/40539?came_from=267&app_id=aaa",
    searchDate: 1601526460,
    addDate: 1601526462,
  };

  beforeEach(() => {
    wrapped = mount(
      <Provider store={store}>
        <Router history={history}>
          <Home />
        </Router>
      </Provider>
    );
  });

  afterEach(() => {
    wrapped.unmount();
  });

  it("displays a loader when searching", (done) => {
    expect(wrapped.find(SiteLoader).length).toEqual(0);
    wrapped.find(SearchBar).invoke("onSearch")("maroon 5");
    expect(wrapped.find(SiteLoader).length).toEqual(1);
    done();
  });

  it("displays a searchbar", (done) => {
    expect(wrapped.find(SearchBar).length).toEqual(1);
    done();
  });

  it("displays an artist card", (done) => {
    expect(wrapped.find(ArtistCard).prop("artist")).toEqual(artist);
    done();
  });

  it("displays a recent searches list", (done) => {
    expect(
      wrapped.findWhere(
        (n) =>
          n.name() === "ArtistGrid" && n.prop("title") === "Recent Searches"
      ).length
    ).toEqual(1);
    done();
  });

  it("displays a favorites list", (done) => {
    expect(
      wrapped.findWhere(
        (n) => n.name() === "ArtistGrid" && n.prop("title") === "Favorites"
      ).length
    ).toEqual(1);
    done();
  });
});
