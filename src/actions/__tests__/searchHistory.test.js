import makeMockStore from "../../store/makeMockStore";
import { clearSearchHistory, fetchSearchHistory } from "../searchHistory";
import { CLEAR_SEARCH_HISTORY, FETCH_SEARCH_HISTORY } from "../types";

require("jest-localstorage-mock");

const store = makeMockStore({
  favorites: {},
});

describe("searchHistory actions", () => {
  const mockHistory = [{ name: "Rihanna", id: "15" }];

  beforeEach(() => {
    localStorage.setItem("searchHistory", JSON.stringify(mockHistory));
  });

  afterEach(() => {
    localStorage.clear();
    store.clearActions();
  });

  it("successfully fetches searchHistory", (done) => {
    store.dispatch(fetchSearchHistory());
    const actions = store.getActions();
    expect(localStorage.getItem).toHaveBeenLastCalledWith("searchHistory");
    expect(actions[0].type).toEqual(FETCH_SEARCH_HISTORY);
    expect(actions[0].payload).toEqual(mockHistory);
    done();
  });

  it("successfully clears History", (done) => {
    store.dispatch(clearSearchHistory());
    const actions = store.getActions();
    expect(localStorage.removeItem).toHaveBeenLastCalledWith("searchHistory");
    expect(actions[0].type).toEqual(CLEAR_SEARCH_HISTORY);
    done();
  });
});
