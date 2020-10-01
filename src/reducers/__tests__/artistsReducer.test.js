import { FETCH_ARTIST, FETCH_ARTIST_ERROR } from "../../actions/types";
import artistsReducer from "../artistReducer";

describe("artistsReducer", () => {
  it("handles fecthArtist", (done) => {
    const action = {
      type: FETCH_ARTIST,
      payload: {
        name: "Maroon 5",
        id: "510",
      },
    };
    const newState = artistsReducer(null, action);
    expect(newState).toEqual(action.payload);
    done();
  });

  it("handles fetchArtist errors", (done) => {
    const action = {
      type: FETCH_ARTIST_ERROR,
      payload: "Invalid Query",
    };
    const newState = artistsReducer(null, action);
    expect(newState).toEqual({ error: action.payload });
    done();
  });

  it("handles action with unknown type", () => {
    const newState = artistsReducer(null, {});
    expect(newState).toEqual(null);
  });
});
