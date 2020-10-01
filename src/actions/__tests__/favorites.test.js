import moment from "moment";
import makeMockStore from "../../store/makeMockStore";
import {
  addToFavorites,
  fetchFavorites,
  removeFromFavorites,
} from "../favorites";
import {
  ADD_TO_FAVORITES,
  FETCH_FAVORITES,
  REMOVE_FROM_FAVORITES,
} from "../types";

require("jest-localstorage-mock");

const store = makeMockStore({
  favorites: {},
});

describe("favorites actions", () => {
  const mockFavorites = [{ name: "Rihanna", id: "15" }];

  beforeEach(() => {
    localStorage.setItem("favorites", JSON.stringify(mockFavorites));
  });

  afterEach(() => {
    store.clearActions();
    localStorage.clear();
  });

  it("successfully fetches favorites", (done) => {
    store.dispatch(fetchFavorites());
    const actions = store.getActions();
    expect(localStorage.getItem).toHaveBeenLastCalledWith("favorites");
    expect(actions[0].type).toEqual(FETCH_FAVORITES);
    expect(actions[0].payload).toEqual(mockFavorites);
    done();
  });

  it("successfully adds to favorites", (done) => {
    const artist = {
      id: "510",
      name: "Maroon 5",
    };
    store.dispatch(addToFavorites(artist));
    const actions = store.getActions();
    expect(localStorage.getItem).toHaveBeenLastCalledWith("favorites");
    expect(localStorage.setItem).toHaveBeenLastCalledWith(
      "favorites",
      JSON.stringify([
        ...mockFavorites,
        { ...artist, addDate: moment().unix() },
      ])
    );
    expect(actions[0].type).toEqual(ADD_TO_FAVORITES);
    expect(actions[0].payload).toEqual({ ...artist, addDate: moment().unix() });
    done();
  });

  it("successfully removes from favorites", (done) => {
    const artistID = "15";
    store.dispatch(removeFromFavorites(artistID));
    const actions = store.getActions();
    expect(localStorage.getItem).toHaveBeenLastCalledWith("favorites");
    expect(localStorage.setItem).toHaveBeenLastCalledWith(
      "favorites",
      JSON.stringify([])
    );
    expect(actions[0].type).toEqual(REMOVE_FROM_FAVORITES);
    expect(actions[0].payload).toEqual(artistID);
    done();
  });
});
