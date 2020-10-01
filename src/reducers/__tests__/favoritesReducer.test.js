import _ from "lodash";
import {
  FETCH_FAVORITES,
  ADD_TO_FAVORITES,
  REMOVE_FROM_FAVORITES,
} from "../../actions/types";
import favoritesReducer from "../favoritesReducer";
import searchHistoryReducer from "../searchHistoryReducer";

describe("favoritesReducer", () => {
  it("handles fetchFavorites", (done) => {
    const action = {
      type: FETCH_FAVORITES,
      payload: [
        {
          name: "Maroon 5",
          id: "510",
        },
      ],
    };
    const newState = favoritesReducer({}, action);
    expect(newState).toEqual({ ..._.mapKeys(action.payload, "id") });
    done();
  });

  it("handles handles addToFavorites", (done) => {
    const action = {
      type: ADD_TO_FAVORITES,
      payload: {
        name: "Maroon 5",
        id: "510",
      },
    };
    const newState = favoritesReducer({}, action);
    expect(newState).toEqual({ [action.payload.id]: action.payload });
    done();
  });

  it("handles handles remove from favorites", (done) => {
    const id = "510";
    const action = {
      type: REMOVE_FROM_FAVORITES,
      payload: id,
    };
    const newState = favoritesReducer(
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
