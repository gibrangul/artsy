import _ from "lodash";
import { CLEAR_SEARCH_HISTORY, FETCH_SEARCH_HISTORY } from "../actions/types";

const INITIAL_STATE = [];

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case FETCH_SEARCH_HISTORY:
      return action.payload;
    case CLEAR_SEARCH_HISTORY:
      return INITIAL_STATE;
    default:
      return state;
  }
};
