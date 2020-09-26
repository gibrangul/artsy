import { combineReducers } from "redux";
import artistsReducer from "./artistsReducer";
import eventsReducer from "./eventsReducer";

export default combineReducers({
  artists: artistsReducer,
  events: eventsReducer,
});
