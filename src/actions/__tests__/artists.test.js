import _ from "lodash";
import moxios from "moxios";
import moment from "moment";
import bandsInTown from "../../apis/bandsInTown";
import makeMockStore from "../../store/makeMockStore";
import { fetchArtist } from "../index";
import {
  ADD_TO_SEARCH_HISTORY,
  FETCH_ARTIST,
  FETCH_ARTIST_ERROR,
} from "../types";

require("jest-localstorage-mock");

const store = makeMockStore({
  artist: null,
  searchHistory: [
    { name: "Rihanna", id: "15" },
    { name: "The Script", id: "25" },
  ],
});

describe("fetchArtist", () => {
  const mockHistory = _.mapKeys(store.getState().searchHistory, "id");

  beforeEach(() => {
    moxios.install(bandsInTown);
  });

  afterEach(() => {
    localStorage.clear();
    store.clearActions();
    moxios.uninstall(bandsInTown);
  });

  it("successfully fetches an artists", (done) => {
    const name = "maroon%205";
    const artist = {
      id: "510",
      name: "maroon 5",
    };
    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith({
        status: 200,
        response: artist,
      });
    });
    return store.dispatch(fetchArtist(name)).then(() => {
      const actions = store.getActions();

      const expectedStore = Object.values({
        ...mockHistory,
        [artist.id]: { ...artist, searchDate: moment().unix() },
      });

      expect(localStorage.setItem).toHaveBeenLastCalledWith(
        "searchHistory",
        JSON.stringify(expectedStore)
      );

      expect(actions[0].type).toEqual(FETCH_ARTIST);
      expect(actions[0].payload.name).toEqual(artist.name);
      expect(actions[1].type).toEqual(ADD_TO_SEARCH_HISTORY);

      done();
    });
  });

  it("invalid name results in error", (done) => {
    const name = "aaskdjlkad";
    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith({
        status: 404,
      });
    });
    return store.dispatch(fetchArtist(name)).then(() => {
      const actions = store.getActions();
      expect(actions[0].type).toEqual(FETCH_ARTIST_ERROR);
      done();
    });
  });
});
