import _ from "lodash";
import {
  ADD_TO_SEARCH_HISTORY,
  CLEAR_SEARCH_HISTORY,
  FETCH_SEARCH_HISTORY,
} from "../actions/types";

const INITIAL_STATE = {};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case FETCH_SEARCH_HISTORY:
      return { ...state, ..._.mapKeys(action.payload, "id") };
    case ADD_TO_SEARCH_HISTORY:
      return { ...state, [action.payload.id]: action.payload };
    case CLEAR_SEARCH_HISTORY:
      return INITIAL_STATE;
    default:
      return state;
  }
};
