import { FETCH_ARTIST, FETCH_ARTIST_ERROR } from "../actions/types";

const INITIAL_STATE = null;

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case FETCH_ARTIST:
      return { ...action.payload };
    case FETCH_ARTIST_ERROR:
      return { error: action.payload };
    default:
      return state;
  }
};
