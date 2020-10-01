import _ from "lodash";
import {
  ADD_TO_FAVORITES,
  FETCH_FAVORITES,
  REMOVE_FROM_FAVORITES,
  CLEAR_FAVORITES,
} from "../actions/types";

const INITIAL_STATE = {};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case FETCH_FAVORITES:
      return { ...state, ..._.mapKeys(action.payload, "id") };
    case ADD_TO_FAVORITES:
      return { ...state, [action.payload.id]: action.payload };
    case REMOVE_FROM_FAVORITES:
      return _.omit(state, action.payload);
    case CLEAR_FAVORITES:
      return INITIAL_STATE;
    default:
      return state;
  }
};
