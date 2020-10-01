import _ from "lodash";
import {
  ADD_TO_SEARCH_HISTORY,
  CLEAR_SEARCH_HISTORY,
  FETCH_SEARCH_HISTORY,
} from "../../actions/types";
import searchHistoryReducer from "../searchHistoryReducer";

describe("searchHistoryReducer", () => {
  it("handles fetchSearchHistory", (done) => {
    const action = {
      type: FETCH_SEARCH_HISTORY,
      payload: [
        {
          name: "Maroon 5",
          id: "510",
        },
      ],
    };
    const newState = searchHistoryReducer({}, action);
    expect(newState).toEqual({ ..._.mapKeys(action.payload, "id") });
    done();
  });

  it("handles addToSearchHistory", (done) => {
    const action = {
      type: ADD_TO_SEARCH_HISTORY,
      payload: {
        name: "Maroon 5",
        id: "510",
      },
    };
    const newState = searchHistoryReducer({}, action);
    expect(newState).toEqual({ [action.payload.id]: action.payload });
    done();
  });

  it("handles handles clearSearchHistory", (done) => {
    const id = "510";
    const action = {
      type: CLEAR_SEARCH_HISTORY,
    };
    const newState = searchHistoryReducer(
      {
        [id]: { name: "Maroon 5", id },
      },
      action
    );
    expect(newState).toEqual({});
    done();
  });

  it("handles action with unknown type", () => {
    const newState = searchHistoryReducer({}, {});
    expect(newState).toEqual({});
  });
});
