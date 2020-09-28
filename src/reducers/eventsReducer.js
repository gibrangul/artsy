import _ from "lodash";
import { FETCH_EVENTS } from "../actions/types";

const INITIAL_STATE = {};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case FETCH_EVENTS:
      return { ..._.mapKeys(action.payload, "id") };
    default:
      return state;
  }
};
