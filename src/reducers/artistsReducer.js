import _ from "lodash";
import { FETCH_ARTISTS } from "../actions/types";

const INITIAL_STATE = {};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case FETCH_ARTISTS:
      return { ...state, ..._.mapKeys(action.payload) };
    default:
      return state;
  }
};
