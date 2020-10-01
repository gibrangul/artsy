import { act } from "@testing-library/react";
import { mount } from "enzyme";
import _ from "lodash";
import moxios from "moxios";
import React from "react";
import { Provider } from "react-redux";
import { Router } from "react-router-dom";
import bandsInTown from "../../../apis/bandsInTown";
import ArtistCard from "../../../components/ArtistCard/ArtistCard";
import EventsGrid from "../../../components/EventsGrid/EventsGrid";
import FiltersBar from "../../../components/FiltersBar/FiltersBar";
import history from "../../../history";
import mockArtistList from "../../../mockArtistList.json";
import makeMockStore from "../../../store/makeMockStore";
import Events from "../Events";
import mockEvents from "./mockEvents.json";

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

const store = makeMockStore({
  artist,
  searchHistory: { ..._.mapKeys(mockArtistList, "id") },
  favorites: { ..._.mapKeys(mockArtistList, "id") },
});

describe("Home Page", () => {
  let wrapped;

  beforeEach(() => {
    moxios.install(bandsInTown);
    wrapped = mount(
      <Provider store={store}>
        <Router history={history}>
          <Events />
        </Router>
      </Provider>
    );
  });

  afterEach(() => {
    moxios.uninstall(bandsInTown);
    wrapped.unmount();
  });

  it("displays an artist card", (done) => {
    expect(wrapped.find(ArtistCard).length).toEqual(1);
    expect(wrapped.find(ArtistCard).prop("artist")).toEqual(artist);
    done();
  });

  it("displays a filter bar", async (done) => {
    await act(async () => {
      const request = moxios.requests.mostRecent();
      await request.respondWith({
        status: 200,
        response: mockEvents,
      });
      wrapped.update();
    });
    expect(wrapped.find(FiltersBar).length).toEqual(1);
    done();
  });

  it("displays an event grid", async (done) => {
    // Fixes ACT error
    await act(async () => {
      const request = moxios.requests.mostRecent();
      await request.respondWith({
        status: 200,
        response: mockEvents,
      });
      wrapped.update();
    });
    expect(wrapped.find(EventsGrid).length).toEqual(1);
    done();
    // moxios.wait(() => {
    //   const request = moxios.requests.mostRecent();
    //   request
    //     .respondWith({
    //       status: 200,
    //       response: mockEvents,
    //     })
    //     .then(() => {
    //       expect(wrapped.find(EventsGrid).length).toEqual(1);
    //       done();
    //     });
    // });
  });
});
